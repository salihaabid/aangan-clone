import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#264021] text-gray-200 pt-16 pb-12 mt-20 relative'>
      {/* ✅ Only 1 col on mobile, 4 cols from lg and up */}
      <div className='w-[95%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12'>
        {/* Left Logo */}
        <div className='flex flex-col items-center lg:items-start'>
          <img
            src='/images/Logo_2.webp'
            alt='Logo'
            className='w-40 lg:w-50 h-auto mb-6'
          />
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl lg:text-3xl font-[400] mb-3'>Quick links</h2>
          <ul className='space-y-2 text-[#b6beb4] text-[18px] lg:text-[20px] font-[400]'>
            <li>
              <a href='#' className='hover:underline'>
                Search
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms of Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Shipping Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl lg:text-3xl font-[400] mb-3'>Contact Us</h2>
          <ul className='space-y-2 text-[#b6beb4] text-[18px] lg:text-[20px] font-[400]'>
            <li>
              Home Delivery available in{' '}
              <span className='font-bold text-[#b6beb4]'>Lahore.</span>
            </li>
            <li>
              WhatsApp/Call: <br /> 03171774397
            </li>
            <li>
              Email: <br /> aangandairy@gmail.com
            </li>
          </ul>
        </div>

        {/* Cheese Image */}
        <div className='flex justify-center lg:justify-end'>
          <img
            src='/images/dripping.png'
            alt='Cheese'
            className='w-40 lg:w-60 h-auto'
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className='flex justify-center gap-6 pb-8 text-lg mt-12'>
        <a href='#' className='hover:text-white'>
          <FaFacebook size={22} />
        </a>
        <a href='#' className='hover:text-white'>
          <FaInstagram size={22} />
        </a>
        <a href='#' className='hover:text-white'>
          <FaYoutube size={22} />
        </a>
        <a href='#' className='hover:text-white'>
          <FaTiktok size={22} />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-600 pt-6 text-center text-sm lg:text-lg text-[#b6beb4]'>
        © 2025, Aangan Dairy Developed by Finz Commercium ·
        <a href='#' className='ml-1 hover:underline'>
          Privacy policy
        </a>{' '}
        ·
        <a href='#' className='ml-1 hover:underline'>
          Refund policy
        </a>{' '}
        ·
        <a href='#' className='ml-1 hover:underline'>
          Terms of service
        </a>{' '}
        ·
        <a href='#' className='ml-1 hover:underline'>
          Shipping policy
        </a>{' '}
        ·
        <a href='#' className='ml-1 hover:underline'>
          Contact information
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href='https://wa.me/923171774397'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300'
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}
