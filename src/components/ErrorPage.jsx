import errorImg from '../assets/images/404/404.gif'
import Footer from './Footer';
import Header from './Header';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl my-10 flex justify-center rounded-2xl mx-auto" >
                <img src={errorImg} alt="erro image" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;