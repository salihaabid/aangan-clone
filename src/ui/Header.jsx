import { assets } from '../assets/assets';
export default function Header() {
  return (
    <div className='w-[95%] mx-auto rounded-2xl shadow-md overflow-hidden'>
      <div className='flex flex-col lg:flex-row min-h-[90vh]'>
        {/* Right Side: Full Image */}
        <div className='w-full lg:w-1/2 overflow-hidden'>
          <img
            src={assets.hero_img} // replace with your cheese image
            className='w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105'
            alt='Cheese'
          />
        </div>

        {/* Left Side: Text with background */}
        <div className='flex items-center justify-center w-full lg:w-1/2 bg-[#f8ead0] p-5 lg:p-16'>
          <div className='max-w-xl text-center lg:text-left'>
            <h1 className='text-[50px] md:text-[65px] lg:text-[70px] font-bold text-[#2a4125] leading-tight'>
              Farm Fresh <br /> Cheese From <br /> Heart of Punjab
            </h1>
            <p className='py-6 text-[#2a4125] text-[15px] md:text-[18px]'>
              Crafted daily with locally sourced milk. Pasteurized,
              Halal-certified, and batch-stamped for quality.
            </p>
            <div className='flex justify-center lg:justify-start'>
              <button className='btn bg-[#2a4125] hover:bg-[#22351e] py-[6px] px-[14px] text-[15px] md:text-[17px]'>
                Shop Best Sellers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
