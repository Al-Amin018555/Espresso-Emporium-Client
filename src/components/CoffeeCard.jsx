import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, taste, photo } = coffee;

  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });




  }
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] pr-6 pl-3 py-6 shadow-sm">
        <figure>
          <img
            src={photo}
            alt={name} />
        </figure>

        <div className="flex justify-between items-center w-full gap-6">

          <div className="space-y-1 text-justify">
            <h2 className="card-title">Name: {name}</h2>
            <p className="text-left">Quantity: {quantity}</p>
            <p className="text-left">Taste: {taste}</p>
          </div>

          <div>
            <div className="join join-vertical space-y-2 ">
              <button className="btn join-item text-white font-semibold rounded-2xl bg-[#D2B48C]">View</button>
              <button className="btn join-item text-white font-semibold rounded-2xl bg-[#3C393B]">Edit</button>
              <button onClick={() => handleDelete(_id)} className="btn join-item text-white font-semibold rounded-2xl bg-[#EA4744]">Delete</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;