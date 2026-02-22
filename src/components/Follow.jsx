import cup1 from '../assets/images/cups/Rectangle 9.png';
import cup2 from '../assets/images/cups/Rectangle 10.png';
import cup3 from '../assets/images/cups/Rectangle 11.png';
import cup4 from '../assets/images/cups/Rectangle 12.png';
import cup5 from '../assets/images/cups/Rectangle 13.png';
import cup6 from '../assets/images/cups/Rectangle 14.png';
import cup7 from '../assets/images/cups/Rectangle 15.png';
import cup8 from '../assets/images/cups/Rectangle 16.png';
const Follow = () => {
    return (
        <div>
            <div className="text-center space-y-4">
                <p className="textarea-lg md:text-xl">Follow Us Now</p>
                <h2 className="font-rancho text-4xl md:text-6xl">Follow on Instagram</h2>
            </div>

            <div className="mt-6 md:mt-12 mb-10 md:mb-24 flex flex-col items-center  md:p-0 md:grid md:grid-cols-4 gap-6">
                <img src={cup1} className='w-80 md:w-full' alt="cup" />
                <img src={cup2} className='w-80 md:w-full' alt="cup" />
                <img src={cup3} className='w-80 md:w-full' alt="cup" />
                <img src={cup4} className='w-80 md:w-full' alt="cup" />
                <img src={cup5} className='w-80 md:w-full' alt="cup" />
                <img src={cup6} className='w-80 md:w-full' alt="cup" />
                <img src={cup7} className='w-80 md:w-full' alt="cup" />
                <img src={cup8} className='w-80 md:w-full' alt="cup" />
            </div>

        </div>
    );
};

export default Follow;