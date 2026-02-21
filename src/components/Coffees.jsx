import { use } from "react";
import CoffeeCard from "./CoffeeCard";

const coffeePromise = fetch("http://localhost:3000/coffees").then(res => res.json());
console.log(coffeePromise)

const Coffees = () => {
    const coffees = use(coffeePromise);
    console.log(coffees)
    return (
        <div className="my-10 md:my-24">
            <div className="text-center">
                <p>--- Sip & Savor ---</p>
                <h2 className="font-rancho text-4xl">Our Popular Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coffees;