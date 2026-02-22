import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee)

        //update coffee
        fetch(`http://localhost:3000/updateCoffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Coffee data updated successfully!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="max-w-7xl my-10 rounded-2xl mx-auto bg-[#F4F3F0] py-10 md:py-18 px-12 md:px-24">
            <Link to='/' className="font-rancho text-3xl flex items-center gap-2 mb-6 md:mb-12"> <GoArrowLeft />
                Back to home</Link>
            <div className="md:px-20 text-center space-y-4">
                <h2 className="font-rancho text-3xl md:text-5xl">Update Existing Coffee Details</h2>
                <p className="text-justify">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleUpdateCoffee} className="my-6">
                <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-6 rounded-box">
                    <div>
                        <label className="label">Name</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="name" defaultValue={name} placeholder="Enter Coffee Name" />
                    </div>
                    <div>
                        <label className="label">Qutanity</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="quantity" defaultValue={quantity} placeholder="Enter Coffee quantity" />
                    </div>
                    <div>
                        <label className="label">Supplier</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="supplier" defaultValue={supplier} placeholder="Enter Coffee supplier" />
                    </div>
                    <div>
                        <label className="label">Taste</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="taste" defaultValue={taste} placeholder="Enter Coffee taste" />
                    </div>
                    <div>
                        <label className="label">Category</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="category" defaultValue={category} placeholder="Enter Coffee category" />
                    </div>
                    <div>
                        <label className="label">Details</label>
                        <br />
                        <input type="text" className="input w-full outline-0" name="details" defaultValue={details} placeholder="Enter Coffee details" />
                    </div>
                </fieldset>
                <div className="my-6">
                    <label className="label">Photo</label>
                    <br />
                    <input type="text" className="input w-full outline-0" name="photo" defaultValue={photo} placeholder="Enter photo URL" />
                </div>
                <input type="submit" className="btn w-full font-rancho text-sm md:text-2xl bg-[#D2B48C] text-[#331A15]" value="Update Coffee Details" />
            </form>


        </div>
    );
};

export default UpdateCoffee;