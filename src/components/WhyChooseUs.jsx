import Aroma from '../assets/images/icons/1.png';
import Quality from '../assets/images/icons/2.png';
import Grades from '../assets/images/icons/3.png';
import Roasting from '../assets/images/icons/4.png';
const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto py-12">
         <div className="flex gap-8">
               <div className='space-y-2'>
                <img src={Aroma} alt="" />
                <h3 className="font-rancho text-4xl">Awesome Aroma</h3>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-2'>
                <img src={Quality} alt="" />
                <h3 className="font-rancho text-4xl">High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-2'>
                <img src={Grades} alt="" />
                <h3 className="font-rancho text-4xl">Pure Grades</h3>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-2'>
                <img src={Roasting} alt="" />
                <h3 className="font-rancho text-4xl">Proper Roasting</h3>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
         </div>
          
        </div>
    );
};

export default WhyChooseUs;