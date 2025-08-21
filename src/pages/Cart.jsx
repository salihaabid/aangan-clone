import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { products, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itemsArray = [];
    let calcTotal = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          const product = products.find((p) => p._id === items);
          if (product) {
            const quantity = cartItems[items][item];
            const itemTotal = product.price * quantity;
            calcTotal += itemTotal;

            itemsArray.push({
              id: items,
              size: item,
              quantity,
              price: product.price,
              name: product.name,
              image: product.image[0],
            });
          }
        }
      }
    }

    setCartData(itemsArray);
    setTotal(calcTotal);
  }, [cartItems, products]);

  // 🛒 Empty cart UI
  if (cartData.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-[70vh] text-center'>
        <h2 className='text-6xl font-medium text-[#2a4125] mb-10'>
          Your cart is empty
        </h2>
        <Link
          className='bg-[#2a4125] text-white px-10 py-5 rounded-full shadow hover:bg-[#3a5135] transition text-xl'
          to='/Collection'
        >
          Continue shopping
        </Link>
        <p className='mt-9 text-gray-600'>
          Have an account?{' '}
          <a href='/login' className='text-red-600 underline'>
            Log in
          </a>{' '}
          to check out faster.
        </p>
      </div>
    );
  }

  // 🛒 Filled cart UI
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className='flex justify-between items-center mb-6'>
        {/* Continue shopping link */}
        {/* Cart heading */}
        <h2 className='text-2xl font-bold text-[#2a4125]'>Your cart</h2>
        <Link
          to='/Collection'
          className='text-[#2a4125] underline hover:text-[#3a5135]'
        >
          Continue shopping
        </Link>
      </div>
      {/* Header row */}
      <div className='grid grid-cols-3 text-gray-500 text-sm font-medium border-b pb-2'>
        <span className='justify-self-start'>Product</span>
        <span className='justify-self-center'>Quantity</span>
        <span className='justify-self-end'>Total</span>
      </div>

      <div className='space-y-4'>
        {cartData.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className='flex items-center justify-between border-b py-4'
          >
            {/* Product info */}
            <Link
              className='flex items-center space-x-4'
              to={`/product/${item.id}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-16 h-16 object-cover rounded'
              />
              <div>
                <h3 className='text-lg font-semibold text-[#2a4125]'>
                  {item.name}
                </h3>
                <p className='text-sm text-gray-500'>Rs.{item.price}.00</p>
                {item.size && (
                  <p className='text-xs text-gray-400'>Size: {item.size}</p>
                )}
              </div>
            </Link>

            {/* Qty controls (functional now) */}
            <div className='flex items-center space-x-2'>
              <button
                className='px-2 border rounded cursor-pointer'
                onClick={() =>
                  updateQuantity(item.id, item.size, item.quantity - 1)
                }
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span className='px-3'>{item.quantity}</span>
              <button
                className='px-2 border rounded cursor-pointer'
                onClick={() =>
                  updateQuantity(item.id, item.size, item.quantity + 1)
                }
              >
                +
              </button>
            </div>

            {/* Total + Remove */}
            <div className='flex items-center space-x-4'>
              <span className='font-medium text-[#2a4125]'>
                Rs.{item.price * item.quantity}.00
              </span>
              <button
                className='text-red-500 hover:text-red-700 text-lg cursor-pointer'
                onClick={() => updateQuantity(item.id, item.size, 0)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout UI */}
      <div className='mt-6 flex flex-col items-end'>
        <p className='text-lg font-medium'>Estimated total: Rs.{total}.00</p>
        <p className='text-sm text-gray-500 mt-1'>
          Taxes, discounts and shipping calculated at checkout.
        </p>
        <Link
          className='mt-4 bg-[#2a4125] text-white px-6 py-3 rounded-full shadow hover:bg-[#3a5135] transition'
          to='/CheckOut'
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
