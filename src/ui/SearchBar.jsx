import React, { useContext, useRef, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const inputRef = useRef(null);

  // Auto focus input when searchbar opens
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  // Close handler (also clears search)
  const handleClose = () => {
    setSearch(''); // clear input
    setShowSearch(false); // close searchbar
  };

  if (!showSearch) return null;

  return (
    <div
      className='fixed inset-0 bg-black/40 flex items-start justify-center z-50'
      onClick={handleClose} // close if clicked outside
    >
      <div
        className='mt-20 w-full max-w-2xl px-4'
        onClick={(e) => e.stopPropagation()} // prevent close if clicked inside
      >
        <div className='flex items-center bg-[#f7f2e7] rounded-2xl shadow-lg overflow-hidden border border-gray-200'>
          {/* Search Icon */}
          <FaSearch className='ml-4 text-gray-500' size={18} />

          {/* Input */}
          <input
            ref={inputRef}
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for cheeses, deals, or collections...'
            className='flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700 text-lg placeholder-gray-400'
          />

          {/* Clear Button (shows only if typing) */}
          {/* {search && (
            <button
              onClick={() => setSearch('')}
              className='p-2 text-gray-400 hover:text-gray-600 transition cursor-pointer'
              aria-label='Clear search'
            >
              <FaTimes size={18} />
            </button>
          )} */}

          {/* Close Button */}
          <button
            onClick={handleClose}
            className='p-3 text-red-500 hover:text-red-700 transition cursor-pointer'
            aria-label='Close searchbar'
          >
            <FaTimes size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
