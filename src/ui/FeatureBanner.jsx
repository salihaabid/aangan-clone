const FeatureBanner = () => {
  return (
    <div className='relative py-6 sm:py-3 mt-16'>
      {/* Background color + opacity effect */}
      <div className='absolute inset-0 bg-[#f6eedb]/90 backdrop-blur-sm '></div>

      {/* Content */}
      <div className='relative w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 p-4'>
        {/* 1 - Free Delivery */}
        <div className='flex flex-row items-center justify-center gap-3 text-center pb-6 sm:pb-0'>
          <span className='text-5xl'>📦</span>
          <p className='text-[20px] font-medium text-[#555555]'>
            <span className='whitespace-nowrap'>Free delivery on orders</span>{' '}
            <br />
            over Rs. 2000
          </p>
        </div>

        {/* 2 - Delivery Time */}
        <div className='flex flex-row items-center justify-center gap-3 text-center pb-6 sm:pb-0'>
          <span className='text-5xl'>⏰</span>
          <p className='text-[20px] font-medium text-[#555555]'>
            Delivery 24–48 <br /> Hours in Lahore
          </p>
        </div>

        {/* 3 - Fresh Dairy */}
        <div className='flex flex-row items-center justify-center gap-3 text-center pb-6 sm:pb-0'>
          <span className='text-5xl'>🧀</span>
          <p className='text-[20px] font-medium text-[#555555]'>
            100% Fresh Dairy <br /> Product
          </p>
        </div>

        {/* 4 - Made in Pakistan */}
        <div className='flex flex-row items-center justify-center gap-3 text-center pb-6 sm:pb-0'>
          <span className='text-5xl text-[#2a4125]'>🇵🇰</span>
          <p className='text-[20px] font-medium text-[#555555]'>
            Proudly Made in <br /> Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
