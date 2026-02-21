const CoffeeCard = ({ coffee }) => {
  const { name, quantity, taste, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] pr-6 py-6 shadow-sm">
        <figure>
          <img
            src={photo}
            alt={name} />
        </figure>
        <div className="flex justify-between items-center w-full gap-6">
          <div className="space-y-1">
            <h2 className="card-title">Name: {name}</h2>
            <p className="text-left">Quantity: {quantity}</p>
            <p className="text-left">Taste: {taste}</p>
            
          </div>
          <div className="card-actions ">
            <div className="join join-vertical space-y-2 ">
              <button className="btn join-item text-white font-semibold rounded-2xl bg-[#D2B48C]">View</button>
              <button className="btn join-item text-white font-semibold rounded-2xl bg-[#3C393B]">Edit</button>
              <button className="btn join-item text-white font-semibold rounded-2xl bg-[#EA4744]">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/**
 * {
   
  {
    "name": "Midnight Kraft Perk",
    "quantity": "14 oz",
    "supplier": "KP Roasters",
    "taste": "Dark Chocolate, Smokey, Intense",
    "category": "Dark Roast",
    "details": "Intense dark roast for the serious coffee lover. Sustainable kraft paper packaging with a sleek black insulator.",
    "photo": "https://example.com/images/kp-mockup.png"
  },
  {
    "name": "Heritage Morning Coffee",
    "quantity": "10 oz",
    "supplier": "Daily Brew Co.",
    "taste": "Balanced, Toasted, Sweet",
    "category": "House Blend",
    "details": "Our classic house blend. A balanced medium roast with a hint of toasted caramel, served in our iconic corrugated sleeve cup.",
    "photo": "https://example.com/images/heritage-morning.png"
  }
}
 */
export default CoffeeCard;