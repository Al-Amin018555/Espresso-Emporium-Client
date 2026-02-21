import { MdEmail } from 'react-icons/md';
import background from '../assets/images/more/13.jpg'
import logo from '../assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { IoLocation } from 'react-icons/io5';
import copyright from "../assets/images/more/24.jpg"

const Footer = () => {
    return (
        <div>
            <footer className="p-10" style={{ backgroundImage: `url(${background})` }}>
                <div className='max-w-7xl mx-auto'>
                    <img className='w-18.75' src={logo} alt="" />
                </div>
                <div className="max-w-7xl flex justify-between mx-auto">

                    <aside className='w-[60%] space-y-4'>
                        <p className='font-rancho text-3xl md:text-5xl'>Espresso Emporium</p>
                        <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>

                        <div className='flex gap-4'>
                            <FaFacebook size={35}></FaFacebook>
                            <FaTwitter size={35}></FaTwitter>
                            <FaInstagram size={35}></FaInstagram>
                            <FaLinkedin size={35}></FaLinkedin>
                        </div>

                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-5xl mt-6 font-rancho'>Get in Touch</h2>
                            <div className='flex gap-4 items-center'>
                                <FaPhone size={20}></FaPhone>
                                <p>+88 01533 333 ...</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdEmail size={20}></MdEmail>
                                <p>info@gmail.com</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <IoLocation size={20}></IoLocation>
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </aside>

                    <fieldset className="fieldset w-[40%] bg-base-200 border-base-300 space-y-4 rounded-box">
                        <h2 className='text-3xl md:text-5xl font-rancho'>Connect With US</h2>
                        <input type="text" className="input w-full border-0 outline-0" placeholder="Name" />
                        <input type="email" className="input w-full border-0 outline-0" placeholder="Email" />
                        <textarea rows={5} cols={5} placeholder='Message' className='px-3 py-2 border-white bg-white border-0 outline-0' name="" id=""></textarea>
                        <button className="btn btn-outline btn-warning text-black">Send Message</button>
                    </fieldset>
                </div>

            </footer>
            <div className='relative'>
                <img className='h-14 w-full object-cover' src={copyright} alt="" />
                <p className="absolute font-rancho inset-0 text-xl text-center my-4 text-white ">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;