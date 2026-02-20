import bannerImg from "../assets/images/more/3.png";

const Banner = () => {
  return (
    <div
      className="min-h-[60vh] md:min-h-200 bg-cover bg-center flex items-center justify-center-safe border-2"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
   
      {/* Content */}
      <div className="relative z-10 max-w-xl text-left ml-20 md:ml-96  text-white ">
        <h1 className="text-4xl md:text-5xl font-rancho">
          Would you like a Cup of Delicious Coffee?
        </h1>

        <p className="py-6 text-sm md:text-base">
          It's coffee time Sip & Savor Relaxation in every sip! Get the
          nostalgia back! Your companion of every moment! Enjoy the beautiful
          moments and make them memorable.
        </p>

        <button className="bg-[#E3B577] btn hover:btn-outline text-black px-6 py-3 font-semibold rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;