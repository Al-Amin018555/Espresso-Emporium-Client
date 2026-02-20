import Banner from "../components/Banner";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="bg-[#ECEAE3] ">
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default Home;