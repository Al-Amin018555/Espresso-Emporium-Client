import logo from "../assets/images/more/logo1.png"
const Header = () => {
    return (
        <div className="relative w-full">
            <div>
                <img className="max-h-24 w-full object-cover" src="https://i.ibb.co.com/Q57cmpH/15.jpg" alt="" />
            </div>
            <div className="absolute flex items-center justify-center w-full top-0 text-center">
                <img src={logo} className="w-16" alt="" />
                <h2 className="font-rancho text-white p-2 text-3xl md:text-6xl">Espresso Emporium</h2>

            </div>
        </div>
    );
};

export default Header;