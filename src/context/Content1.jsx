import airbub from '../assets/images/airbnb.jpg';
import amazon from '../assets/images/amazon.jpg';
import anthropc from '../assets/images/anthropc.jpg';
import google from '../assets/images/google.jpg';
import marriott from '../assets/images/marriott.jpg';
import openai from '../assets/images/openai.jpg';
import shopify from '../assets/images/shopify.jpg';
import urbn from '../assets/images/urnb.jpg';
import pay from '../assets/images/apply pay.jpg';

const Content1 = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Responsive Flex Container */}
      <div className="flex flex-col lg:flex-row items-start">
        
        {/* Hide Image on Mobile */}
        <div className="hidden lg:flex w-full lg:w-auto order-1 lg:order-2 justify-center mt-6 lg:mt-10">
          <img className="w-full max-w-xs lg:max-w-none lg:w-130 lg:h-150" src={pay} alt="Payment Preview" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 mt-6 lg:mt-10 lg:ml-10 order-2 lg:order-1">
          <div className="justify-start flex gap-2 mb-4">
            <h1 className="inline-block font-bold bg-gray-400 rounded-full px-4 py-1 text-sm text-white">Preview</h1>
          </div>
          <div className="font-bold text-4xl sm:text-5xl lg:text-7xl">
            <p className="text-left mb-2">Financial</p>
            <p className="text-left mb-2">infrastructure</p>
            <p className="text-left mb-2">to grow your</p>
            <p className="text-left mb-2">revenue</p>
          </div>
          <div className="justify-start flex w-full sm:w-3/4 text-left">
            <p className="text-base sm:text-m">
              Join the millions of companies that use Stripe to accept <br /> payments online and in person, embed financial services,<br /> power custom revenue models, and build a more profitable<br /> business.
            </p>
          </div>
          <div className="justify-start flex">
            <p className="font-bold bg-blue-950 text-white rounded-full px-4 py-1">Request an invite</p>
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-4 gap-4 sm:gap-6 mt-10 mb-20 mx-2 sm:mx-20 items-center">
        <img className="w-20 h-auto object-contain sm:w-full" src={openai} alt="Openai" />
        <img className="w-20 h-auto object-contain sm:w-full" src={amazon} alt="Amazon" />
        <img className="w-20 h-auto object-contain sm:w-full" src={google} alt="Google" />
        <img className="w-20 h-auto object-contain sm:w-full" src={anthropc} alt="Anthropc" />
        <img className="w-20 h-auto object-contain sm:w-full" src={marriott} alt="Marriott" />
        <img className="w-20 h-auto object-contain sm:w-full" src={shopify} alt="Shopify" />
        <img className="w-20 h-auto object-contain sm:w-full" src={airbub} alt="Airbnb" />
        <img className="w-20 h-auto object-contain sm:w-full" src={urbn} alt="Urbn" />
      </div>
    </div>
  );
};

export default Content1;
