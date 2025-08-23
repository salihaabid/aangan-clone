import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiSliders } from 'react-icons/fi';

const FilterBar = ({ setFilters, maxPrice, productCount }) => {
  const [sortBy, setSortBy] = useState('best-selling');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showPrice, setShowPrice] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // 🔹 for sidebar
  const priceRef = useRef(null);

  // temp state for mobile (apply/cancel)
  const [tempSort, setTempSort] = useState('best-selling');
  const [tempRange, setTempRange] = useState({ min: '', max: '' });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setFilters({ sortBy: e.target.value, priceRange });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newRange = { ...priceRange, [name]: value };
    setPriceRange(newRange);
    setFilters({ sortBy, priceRange: newRange });
  };

  const handleReset = () => {
    const resetRange = { min: '', max: '' };
    setPriceRange(resetRange);
    setFilters({ sortBy, priceRange: resetRange });
  };

  // Mobile apply
  const handleApply = () => {
    setSortBy(tempSort);
    setPriceRange(tempRange);
    setFilters({ sortBy: tempSort, priceRange: tempRange });
    setMobileOpen(false);
  };

  // Mobile cancel
  const handleCancel = () => {
    setTempSort(sortBy);
    setTempRange(priceRange);
    setMobileOpen(false);
  };

  // 🔹 Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (priceRef.current && !priceRef.current.contains(e.target)) {
        setShowPrice(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* 🔹 Desktop/Tablet view */}
      <div className='hidden md:flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl mt-10 ml-17'>
        <div className='flex items-center gap-4' ref={priceRef}>
          <span className='text-xl font-medium text-[#4b5943]/80'>Filter:</span>

          {/* Price Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setShowPrice(!showPrice)}
              className='flex items-center gap-2 px-5 py-2 hover:text-[#2a4125] '
            >
              <span className='text-xl font-medium text-[#4b5943]/80 hover:text-[#2a4125] transition'>
                Price
              </span>
              {showPrice ? (
                <FaChevronUp className='w-3 h-3 text-[#4b5943]/80' />
              ) : (
                <FaChevronDown className='w-3 h-3 text-[#4b5943]/80' />
              )}
            </button>

            {showPrice && (
              <div
                className='absolute left-0 mt-2 bg-[#fef7e5] border rounded-xl shadow-lg px-5 py-5 z-50 w-95'
                style={{
                  borderTop: '2px solid #2a4125',
                  borderLeft: '2px solid #2a4125',
                  borderRight: '2px solid #2a4125',
                  borderBottom: '4px solid #2a4125',
                }}
              >
                {/* 🔹 Dynamic max price with Reset */}
                <div className='flex items-center justify-between mb-3'>
                  <p className='text-lg text-[#77846a]'>
                    The highest price is Rs.{maxPrice}.00
                  </p>
                  <button
                    onClick={handleReset}
                    className='text-[#3d081b] text-lg underline cursor-pointer'
                  >
                    Reset
                  </button>
                </div>
                <hr className='text-[#77846a]' />
                <div className='flex items-center gap-2 mt-7'>
                  <span className='text-lg text-[#77846a]'>Rs</span>
                  <input
                    type='number'
                    name='min'
                    value={priceRange.min}
                    onChange={handlePriceChange}
                    placeholder='From'
                    className='w-25 px-4 py-2 mr-10 border rounded-lg text-[#77846a] appearance-none focus:outline-none'
                  />
                  <span className='text-lg text-[#77846a]'>Rs</span>
                  <input
                    type='number'
                    name='max'
                    value={priceRange.max}
                    onChange={handlePriceChange}
                    placeholder='To'
                    className='w-25 px-4 py-2 border rounded-lg text-[#77846a] appearance-none focus:outline-none'
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Sort + Count */}
        <div className='flex items-center gap-4 text-red-900'>
          <div className='flex items-center gap-2'>
            <span className='text-[18px] font-medium text-[#4b5943]/80'>
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className='px-3 py-2 transition focus:outline-none font-medium text-[#4b5943]/80 text-lg'
            >
              <option value='best-selling'>Best selling</option>
              <option value='az'>Alphabetically, A-Z</option>
              <option value='za'>Alphabetically, Z-A</option>
              <option value='low-high'>Price, low to high</option>
              <option value='high-low'>Price, high to low</option>
              <option value='old-new'>Date, old to new</option>
              <option value='new-old'>Date, new to old</option>
            </select>
          </div>
          <span className='text-lg text-[#77846a]'>
            {productCount} products
          </span>
        </div>
      </div>

      {/* 🔹 Mobile view */}
      <div className='md:hidden flex justify-between items-center p-4'>
        <button
          className='flex items-center gap-2 text-[#4b5943]/90 font-semibold cursor-pointer'
          onClick={() => setMobileOpen(true)}
        >
          <FiSliders /> Filter & Sort
        </button>
        <span className='text-[#77846a]'>{productCount} products</span>
      </div>

      {/* Sidebar for mobile */}
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 flex transition-opacity duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-[#fef7e5] w-3/4 h-full p-6 shadow-2xl rounded-r-2xl flex flex-col transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <h2 className='text-2xl font-semibold mb-6 text-[#4b5943]'>
            Filters & Sorting
          </h2>

          {/* Sort */}
          <div className='mb-6'>
            <label className='block text-lg font-medium text-[#4b5943] mb-2'>
              Sort by
            </label>
            <select
              value={tempSort}
              onChange={(e) => setTempSort(e.target.value)}
              className='w-full border rounded-lg px-3 py-2'
            >
              <option value='best-selling'>Best selling</option>
              <option value='az'>Alphabetically, A-Z</option>
              <option value='za'>Alphabetically, Z-A</option>
              <option value='low-high'>Price, low to high</option>
              <option value='high-low'>Price, high to low</option>
              <option value='old-new'>Date, old to new</option>
              <option value='new-old'>Date, new to old</option>
            </select>
          </div>

          {/* Price */}
          <div className='mb-6'>
            <p className='mb-2 text-lg text-[#4b5943]'>
              Max price: Rs.{maxPrice}.00
            </p>
            <div className='flex gap-2'>
              <input
                type='number'
                placeholder='Min'
                value={tempRange.min}
                onChange={(e) =>
                  setTempRange({ ...tempRange, min: e.target.value })
                }
                className='w-1/2 border rounded-lg px-3 py-2'
              />
              <input
                type='number'
                placeholder='Max'
                value={tempRange.max}
                onChange={(e) =>
                  setTempRange({ ...tempRange, max: e.target.value })
                }
                className='w-1/2 border rounded-lg px-3 py-2'
              />
            </div>
          </div>

          {/* Buttons */}
          <div className='mt-auto flex justify-between'>
            <button
              className='px-5 py-2 rounded-lg bg-[#c7cdc6] text-[#2a4125] cursor-pointer'
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className='px-5 py-2 rounded-lg bg-[#2a4125] text-white cursor-pointer'
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
