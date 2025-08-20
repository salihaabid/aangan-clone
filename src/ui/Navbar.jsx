import { useContext, useState } from 'react';
import { LuSearch, LuUser, LuShoppingBag } from 'react-icons/lu';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  const navLinkClass = (name) =>
    `!text-[20px] !bg-transparent focus:!bg-transparent active:outline-none 
   hover:text-[#2a4125] hover:underline hover:decoration-[#2a4125]
   ${
     active === name
       ? 'text-[#2a4125] underline decoration-[#2a4125]'
       : 'text-[#77846a]'
   }`;

  const handleClick = (name) => {
    setActive(name);
    setOpenSubmenu(false);
  };

  return (
    <header className='bg-[#fef7e5]'>
      <div className='navbar xl:px-24'>
        {/* Left - Logo */}
        <div className='navbar-start'>
          {/* Mobile Drawer */}
          <div className='lg:hidden'>
            <div className='drawer drawer-end'>
              <input
                id='menu-drawer'
                type='checkbox'
                className='drawer-toggle'
              />
              <div className='drawer-content'>
                <label htmlFor='menu-drawer' className='btn btn-ghost'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 text-[#2a4125]'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </label>
              </div>

              {/* Sidebar Drawer Menu */}
              <div className='drawer-side'>
                <label
                  htmlFor='menu-drawer'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <ul className='menu p-4 w-72 min-h-full bg-[#fef7e5] text-base-content shadow-lg'>
                  {/* Close button */}
                  <li className='flex justify-end mb-2'>
                    <label
                      htmlFor='menu-drawer'
                      className='btn btn-sm btn-ghost text-[#2a4125]'
                    >
                      ✕
                    </label>
                  </li>

                  {/* Mobile Menu Items */}
                  <li>
                    <NavLink
                      to='/'
                      onClick={() => handleClick('Home')}
                      className={navLinkClass('Home')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <details open={openSubmenu}>
                      <summary
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenSubmenu(!openSubmenu);
                          setActive('Products');
                        }}
                        className={navLinkClass('Products')}
                      >
                        Products
                      </summary>
                      <ul className='p-2 bg-[#fef7e5] rounded-md shadow-md'>
                        <li>
                          <NavLink
                            to='/Collection'
                            onClick={() => handleClick('Shop All')}
                            className={navLinkClass('Shop All')}
                          >
                            Shop All
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to='/Cheddar'
                            onClick={() => handleClick('Cheddar')}
                            className={navLinkClass('Cheddar')}
                          >
                            Cheddar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to='/Mozzarella'
                            onClick={() => handleClick('Mozzarella')}
                            className={navLinkClass('Mozzarella')}
                          >
                            Mozzarella
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to='/Shredded'
                            onClick={() => handleClick('Shredded')}
                            className={navLinkClass('Shredded')}
                          >
                            Shredded
                          </NavLink>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <NavLink
                      to='/Deals'
                      onClick={() => handleClick('Deals')}
                      className={navLinkClass('Deals')}
                    >
                      Deals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/Business'
                      onClick={() => handleClick('Business Customers')}
                      className={navLinkClass('Business Customers')}
                    >
                      Business Customers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/Contact'
                      onClick={() => handleClick('Contact Us')}
                      className={navLinkClass('Contact Us')}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/About'
                      onClick={() => handleClick('About Us')}
                      className={navLinkClass('About Us')}
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo */}
          <NavLink
            to='/'
            className='flex justify-center items-center w-full lg:w-auto'
          >
            <img
              src={assets.logo}
              alt='Logo'
              className='h-35 w-auto mx-auto cursor-pointer'
            />
          </NavLink>
        </div>

        {/* Center - Desktop Menu */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-4'>
            <li>
              <NavLink
                to='/'
                onClick={() => handleClick('Home')}
                className={navLinkClass('Home')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <details open={openSubmenu}>
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenSubmenu(!openSubmenu);
                    setActive('Products');
                  }}
                  className={navLinkClass('Products')}
                >
                  Products
                </summary>
                <ul
                  className='p-2 pr-[25px] bg-[#fef7e5] rounded-[15px] shadow-md'
                  style={{
                    borderTop: '2px solid #2a4125',
                    borderLeft: '2px solid #2a4125',
                    borderRight: '2px solid #2a4125',
                    borderBottom: '4px solid #2a4125',
                    padding: '10px 80px 0px 10px',
                  }}
                >
                  <li>
                    <NavLink
                      to='/Collection'
                      onClick={() => handleClick('Shop All')}
                      className={navLinkClass('Shop All')}
                    >
                      Shop All
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='Cheddar'
                      onClick={() => handleClick('Cheddar')}
                      className={navLinkClass('Cheddar')}
                    >
                      Cheddar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/Mozzarella'
                      onClick={() => handleClick('Mozzarella')}
                      className={navLinkClass('Mozzarella')}
                    >
                      Mozzarella
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/Shredded'
                      onClick={() => handleClick('Shredded')}
                      className={navLinkClass('Shredded')}
                    >
                      Shredded
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to='/Deals'
                onClick={() => handleClick('Deals')}
                className={navLinkClass('Deals')}
              >
                Deals
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Business'
                onClick={() => handleClick('Business Customers')}
                className={navLinkClass('Business Customers')}
              >
                Business Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Contact'
                onClick={() => handleClick('Contact Us')}
                className={navLinkClass('Contact Us')}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/About'
                onClick={() => handleClick('About Us')}
                className={navLinkClass('About Us')}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right - Icons */}
        <div className='navbar-end'>
          <div className='flex gap-6 p-4'>
            <LuSearch
              size={29}
              strokeWidth={1.5}
              className='text-[#2a4125] transition-transform duration-200 hover:scale-110 cursor-pointer'
              onClick={() => setShowSearch(true)}
            />
            <div className='relative group'>
              <LuUser
                size={29}
                strokeWidth={1.5}
                className='text-[#2a4125] transition-transform duration-200 hover:scale-110 cursor-pointer'
              />

              {/* Dropdown Menu */}
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div
                  className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 rounded shadow-md bg-[#fef7e5]'
                  style={{
                    borderTop: '2px solid #2a4125',
                    borderLeft: '2px solid #2a4125',
                    borderRight: '2px solid #2a4125',
                    borderBottom: '4px solid #2a4125',
                  }}
                >
                  <Link to='/Login'>
                    <p className='cursor-pointer hover:text-black'>
                      My Profile
                    </p>
                  </Link>
                  <Link to='/Orders'>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                  </Link>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                  <p className='cursor-pointer hover:text-black'>Admin Panel</p>
                </div>
              </div>
            </div>

            {/* Cart Icon with Badge */}
            <Link to='/cart' className='relative'>
              <LuShoppingBag
                size={29}
                strokeWidth={1.5}
                className='text-[#2a4125] transition-transform duration-200 hover:scale-110 cursor-pointer'
              />

              {/* Badge */}
              <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 flex items-center justify-center text-xs bg-black text-white rounded-full'>
                2
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
