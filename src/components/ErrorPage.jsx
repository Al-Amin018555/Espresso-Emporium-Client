import { Link } from 'react-router';
import errorImg from '../assets/images/404/404.gif'
import Footer from './Footer';
import Header from './Header';
import { GoArrowLeft } from 'react-icons/go';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
                <Link to='/' className="font-rancho mt-2 max-w-7xl mx-auto text-3xl flex items-center gap-2"> <GoArrowLeft />
                Back to home</Link>
            <div className="max-w-7xl mt-2 mb-10 flex justify-center rounded-2xl mx-auto" >
                <img src={errorImg} alt="erro image" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;