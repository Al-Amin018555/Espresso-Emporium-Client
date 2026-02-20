import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div>    
            <Banner></Banner>
            <div className="bg-[#ECEAE3]">
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default Home;