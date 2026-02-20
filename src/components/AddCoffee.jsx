const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)


    }
    return (
        <div className="max-w-7xl my-10 rounded-2xl mx-auto bg-[#F4F3F0] py-10 md:py-18 px-12 md:px-24">
            <div className="px-10 md:px-20 text-center space-y-4">
                <h2 className="font-rancho text-3xl md:text-5xl">Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form className="my-6" onSubmit={handleAddCoffee}>
                <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-6 rounded-box">
                    <div>
                        <label className="label">Name</label>
                        <br />
                        <input type="text" className="input w-full" name="name" placeholder="Enter Coffee Name" />
                    </div>
                    <div>
                        <label className="label">Qutanity</label>
                        <br />
                        <input type="text" className="input w-full" name="quantity" placeholder="Enter Coffee quantity" />
                    </div>
                    <div>
                        <label className="label">Supplier</label>
                        <br />
                        <input type="text" className="input w-full" name="supplier" placeholder="Enter Coffee supplier" />
                    </div>
                    <div>
                        <label className="label">Taste</label>
                        <br />
                        <input type="text" className="input w-full" name="taste" placeholder="Enter Coffee taste" />
                    </div>
                    <div>
                        <label className="label">Category</label>
                        <br />
                        <input type="text" className="input w-full" name="category" placeholder="Enter Coffee category" />
                    </div>
                    <div>
                        <label className="label">Details</label>
                        <br />
                        <input type="text" className="input w-full" name="details" placeholder="Enter Coffee details" />
                    </div>
                </fieldset>
                <div className="my-6">
                    <label className="label">Photo</label>
                    <br />
                    <input type="text" className="input w-full" name="photo" placeholder="Enter photo URL" />
                </div>
                <input type="submit" className="btn w-full font-rancho text-sm md:text-2xl bg-[#D2B48C] text-[#331A15]" value="Add Coffee" />
            </form>


        </div>
    );
};

export default AddCoffee;