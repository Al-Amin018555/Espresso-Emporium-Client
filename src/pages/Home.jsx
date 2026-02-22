import Banner from "../components/Banner";
import Coffees from "../components/Coffees";
import Follow from "../components/Follow";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:bg-[#ECEAE3]">
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div className="max-w-7xl mx-auto">
                <Coffees></Coffees>
                <Follow></Follow>
            </div>
        </div>
    );
};

export default Home;