import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
    const { name, quantity, supplier, taste, category, details, photo } = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto md:py-18 my-8 md:my-24'>
            <Link to='/' className="font-rancho text-3xl flex items-center gap-2 mb-6 md:mb-12"> <GoArrowLeft />
                Back to home</Link>
            <div className="card card-side py-6 pr-6 flex flex-col md:flex-row justify-center items-center bg-[#F4F3F0] shadow-sm">
                <figure className="w-1/2">
                    <img className="w-87.5"
                        src={photo}
                        alt={name} />
                </figure>
                <div className="text-justify p-3 md:w-1/2">
                    <p><span className="font-semibold">Name:</span> {name}</p>
                    <p> <span className="font-semibold">Quantity: </span>  {quantity}</p>
                    <p> <span className="font-semibold">Supplier: </span>  {supplier}</p>
                    <p> <span className="font-semibold">Taste: </span>  {taste}</p>
                    <p> <span className="font-semibold">Category: </span>  {category}</p>
                    <p> <span className="font-semibold">Details: </span>  {details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;