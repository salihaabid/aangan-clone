// import React from 'react';

// export default function CheckOut() {
//   return <div>CHECK OUT PAGE</div>;
// }

import { useState } from 'react';

export default function CheckoutPage() {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');
  const productPrice = 1500;
  const quantity = 1;
  const subtotal = productPrice * quantity;

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === 'coupon10') {
      setDiscount(subtotal * 0.1);
      setMessage('🎉 Coupon applied! You saved 10%.');
    } else {
      setDiscount(0);
      setMessage('❌ Invalid coupon code.');
    }
  };

  const totalAfterDiscount = subtotal - discount;

  // Shipping logic
  const shipping = totalAfterDiscount > 5000 ? 0 : 200;
  const shippingMessage =
    totalAfterDiscount > 5000
      ? '🚚 Your shipping is free!'
      : '🚚 Shipping charges Rs 200 apply.';

  const total = totalAfterDiscount + shipping;

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center p-6'>
      <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2'>
        {/* Left Side: Contact + Delivery */}
        <div className='p-6 border-r'>
          <h2 className='text-xl font-bold mb-4'>Contact</h2>
          <input
            type='text'
            placeholder='Email or mobile phone number'
            className='w-full border rounded-lg px-4 py-2 mb-4'
          />

          <h2 className='text-xl font-bold mb-4'>Delivery</h2>
          <select className='w-full border rounded-lg px-4 py-2 mb-3'>
            <option>Pakistan</option>
          </select>
          <div className='grid grid-cols-2 gap-3'>
            <input
              type='text'
              placeholder='First name'
              className='border rounded-lg px-4 py-2'
            />
            <input
              type='text'
              placeholder='Last name'
              className='border rounded-lg px-4 py-2'
            />
          </div>
          <input
            type='text'
            placeholder='Address'
            className='w-full border rounded-lg px-4 py-2 my-3'
          />
          <input
            type='text'
            placeholder='Apartment, suite, etc. (optional)'
            className='w-full border rounded-lg px-4 py-2'
          />
        </div>

        {/* Right Side: Order Summary */}
        <div className='p-6'>
          <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-3'>
              <img
                src='https://via.placeholder.com/50'
                alt='Product'
                className='w-14 h-14 rounded'
              />
              <p>50/50 Shredded Cheese (1kg)</p>
            </div>
            <p className='font-semibold'>Rs {productPrice}</p>
          </div>

          {/* Coupon */}
          <div className='flex mb-2'>
            <input
              type='text'
              placeholder='Enter Promo Code'
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className='flex-1 border rounded-l-lg px-4 py-2'
            />
            <button
              onClick={handleApplyCoupon}
              className='bg-blue-600 text-white px-4 rounded-r-lg'
            >
              Apply
            </button>
          </div>
          {message && <p className='text-sm text-green-600 mb-3'>{message}</p>}

          {/* Price Details */}
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>Rs {subtotal.toFixed(2)}</p>
            </div>
            {discount > 0 && (
              <div className='flex justify-between text-green-600'>
                <p>Discount</p>
                <p>- Rs {discount.toFixed(2)}</p>
              </div>
            )}
            <div className='flex justify-between'>
              <p>Shipping</p>
              <p>Rs {shipping.toFixed(2)}</p>
            </div>
            <p className='text-sm text-gray-500'>{shippingMessage}</p>
            <hr />
            <div className='flex justify-between font-bold text-lg'>
              <p>Total</p>
              <p>PKR {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
