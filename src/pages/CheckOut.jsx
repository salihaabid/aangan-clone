// ///////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function CheckoutPage() {
  const { cartItems, products, deliveryCharges } = useContext(ShopContext);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [cartData, setCartData] = useState([]);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '', // optional
    city: '',
    postalCode: '',
    phone: '',
  });

  // ✅ Convert cartItems (object) into array with details
  useEffect(() => {
    const itemsArray = [];
    for (const pid in cartItems) {
      for (const size in cartItems[pid]) {
        const product = products.find((p) => p._id === pid);
        if (product) {
          itemsArray.push({
            id: pid,
            name: product.name,
            price: product.price,
            qty: cartItems[pid][size],
            img: product.image[0],
            size,
          });
        }
      }
    }
    setCartData(itemsArray);
  }, [cartItems, products]);

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

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
  const shipping = totalAfterDiscount > 2000 ? 0 : deliveryCharges;
  const total = totalAfterDiscount + shipping;

  // // ✅ Validation
  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.email) newErrors.email = 'Email is required';
  //   else if (!/\S+@\S+\.\S+/.test(formData.email))
  //     newErrors.email = 'Invalid email format';

  //   if (!formData.firstName) newErrors.firstName = 'First name is required';
  //   if (!formData.lastName) newErrors.lastName = 'Last name is required';

  //   if (!formData.address) newErrors.address = 'Address is required';

  //   if (!formData.city) newErrors.city = 'City is required';
  //   else if (!/^[A-Za-z\s]+$/.test(formData.city))
  //     newErrors.city = 'City must only contain letters';

  //   if (formData.postalCode && !/^\d+$/.test(formData.postalCode)) {
  //     newErrors.postalCode = 'Postal code must be numbers only';
  //   }

  //   if (!formData.phone) newErrors.phone = 'Phone number is required';
  //   else if (!/^\d{10,15}$/.test(formData.phone))
  //     newErrors.phone = 'Phone must be 10–15 digits';

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // ✅ Handle Complete Order
  // ✅ Handle Complete Order
  // ✅ Handle Complete Order
  const handleCompleteOrder = () => {
    // if (!validateForm()) return;

    // Build new order
    const newOrder = cartData.map((item) => ({
      id: 'ORD-' + Math.floor(Math.random() * 1000000), // better unique ID
      product: item.name,
      price: `Rs.${item.price * item.qty}`,
      size: item.size || 'N/A',
      quantity: item.qty,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Ready to ship',
      img: item.img,
    }));

    // Save to localStorage
    let existingOrders =
      JSON.parse(localStorage.getItem('checkedOutOrders')) || [];
    existingOrders = [...newOrder]; // prepend
    localStorage.setItem('checkedOutOrders', JSON.stringify(existingOrders));

    // Reset form after order
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      postalCode: '',
      phone: '',
    });
    setErrors({});
  };

  // Save order into localStorage
  const newOrder = cartData.map((item) => ({
    id: 'ORD-' + Math.floor(Math.random() * 1000),
    product: item.name,
    price: `Rs.${item.price * item.qty}`, // total for that item
    size: item.size || 'N/A',
    quantity: item.qty,
    date: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    status: 'Ready to ship',
    img: item.img,
  }));

  let existingOrders =
    JSON.parse(localStorage.getItem('checkedOutOrders')) || [];
  existingOrders = [...newOrder, ...existingOrders]; // new order on top
  localStorage.setItem('checkedOutOrders', JSON.stringify(existingOrders));

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-[60%_40%]'>
        {/* Left: Contact & Delivery */}
        <div className='p-8 border-r-2 border-[#77846a]/80'>
          <h2 className='text-2xl font-semibold mb-6 text-[#2a4125]'>
            Contact
          </h2>
          <input
            type='email'
            placeholder='Email *'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='w-full border rounded-lg px-4 py-2 mb-1'
          />
          {errors.email && (
            <p className='text-red-600 text-sm mb-2'>{errors.email}</p>
          )}

          <div className='flex items-center mb-6'>
            <input
              type='checkbox'
              defaultChecked
              className='mr-2 text-[#2a4125] accent-[#2a4125]'
            />
            <span>Email me with news and offers</span>
          </div>

          <h2 className='text-2xl font-semibold mb-6 text-[#2a4125]'>
            Delivery
          </h2>
          <select className='w-full border rounded-lg px-4 py-2 mb-3'>
            <option>Pakistan</option>
          </select>
          <div className='sm:grid sm:grid-cols-2 sm:gap-3'>
            {/* First name */}
            <div className='w-full mb-3'>
              <label htmlFor='firstName' className='sr-only'>
                First name *
              </label>
              <div className='border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#77846a]'>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  autoComplete='given-name'
                  placeholder='First name *'
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className='w-full bg-transparent border-none outline-none focus:ring-0'
                />
              </div>
              {errors.firstName && (
                <p className='text-red-600 text-sm'>{errors.firstName}</p>
              )}
            </div>

            {/* Last name */}
            <div className='w-full mb-3'>
              <label htmlFor='lastName' className='sr-only'>
                Last name *
              </label>
              <div className='border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#77846a]'>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  autoComplete='family-name'
                  placeholder='Last name *'
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className='w-full bg-transparent border-none outline-none focus:ring-0'
                />
              </div>
              {errors.lastName && (
                <p className='text-red-600 text-sm'>{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className='mt-3'>
            <input
              type='text'
              placeholder='Address *'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className='w-full border rounded-lg px-4 py-2'
            />
            {errors.address && (
              <p className='text-red-600 text-sm'>{errors.address}</p>
            )}
          </div>

          <input
            type='text'
            placeholder='Apartment, suite, etc. (optional)'
            value={formData.apartment}
            onChange={(e) =>
              setFormData({ ...formData, apartment: e.target.value })
            }
            className='w-full border rounded-lg px-4 py-2 mt-3'
          />
          <div className='sm:grid sm:grid-cols-2 sm:gap-3 mt-3'>
            {/* City */}
            <div className='w-full mb-3'>
              <label htmlFor='city' className='sr-only'>
                City *
              </label>
              <div className='border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#77846a]'>
                <input
                  id='city'
                  name='city'
                  type='text'
                  placeholder='City *'
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className='w-full bg-transparent border-none outline-none focus:ring-0'
                />
              </div>
              {errors.city && (
                <p className='text-red-600 text-sm'>{errors.city}</p>
              )}
            </div>

            {/* Postal Code */}
            <div className='w-full mb-3'>
              <label htmlFor='postalCode' className='sr-only'>
                Postal code
              </label>
              <div className='border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#77846a]'>
                <input
                  id='postalCode'
                  name='postalCode'
                  type='text'
                  placeholder='Postal code (optional)'
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  className='w-full bg-transparent border-none outline-none focus:ring-0'
                />
              </div>
              {errors.postalCode && (
                <p className='text-red-600 text-sm'>{errors.postalCode}</p>
              )}
            </div>
          </div>

          <div className='mt-3'>
            <input
              type='text'
              placeholder='Phone *'
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className='w-full border rounded-lg px-4 py-2'
            />
            {errors.phone && (
              <p className='text-red-600 text-sm'>{errors.phone}</p>
            )}
          </div>

          <h2 className='text-2xl font-semibold mt-8 mb-4 text-[#2a4125]'>
            Shipping method
          </h2>
          <div className='border rounded-lg px-4 py-3 flex justify-between items-center'>
            <span>
              {totalAfterDiscount > 2000 ? 'Order Above 2000' : 'Standard'}
            </span>
            <span className='font-semibold'>
              {shipping === 0 ? 'FREE' : `Rs ${shipping}`}
            </span>
          </div>

          <h2 className='text-2xl font-semibold mt-8 mb-4 text-[#2a4125]'>
            Payment
          </h2>
          <div className='border rounded-lg px-4 py-3 flex justify-between items-center'>
            <span>Cash on Delivery (COD)</span>
            <span className='font-semibold'>✔</span>
          </div>

          <Link
            to='/Orders'
            onClick={handleCompleteOrder}
            className='mt-6 w-full bg-[#2a4125] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer no-underline inline-block text-center'
          >
            Complete Order
          </Link>
        </div>

        {/* Right: Order Summary */}
        <div className='p-8 sticky top-0 self-start'>
          <h2 className='text-2xl font-semibold mb-6 text-[#2a4125]'>
            Order Summary
          </h2>
          <div className='space-y-4 text-[#2a4125]'>
            {cartData.map((item) => (
              <div
                key={item.id + item.size}
                className='flex justify-between items-center'
              >
                <div className='flex items-center space-x-3'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='w-14 h-14 rounded'
                  />
                  <div>
                    <p className='font-medium'>{item.name}</p>
                    <p className='text-sm text-[#77846a]'>Qty: {item.qty}</p>
                    {item.size && (
                      <p className='text-xs text-gray-500'>Size: {item.size}</p>
                    )}
                  </div>
                </div>
                <p className='font-semibold'>Rs {item.price * item.qty}</p>
              </div>
            ))}
          </div>

          {/* Coupon */}
          <div className='flex mt-6'>
            <input
              type='text'
              placeholder='Enter Promo Code'
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className='flex-1 border border-[#77846a] rounded-l-xl px-4 py-2
               focus:outline-none
               text-[#2a4125] placeholder-[#77846a]'
            />
            <button
              onClick={handleApplyCoupon}
              className='bg-[#2a4125] text-white px-6 rounded-r-xl
               hover:bg-[#1e301b] transition-colors duration-200 cursor-pointer
               '
            >
              Apply
            </button>
          </div>

          {message && <p className='text-sm mt-2 text-green-600'>{message}</p>}

          {/* Price Details */}
          <div className='mt-6 space-y-2'>
            <div className='flex justify-between text-[#2a4125]'>
              <p>Subtotal ({cartData.length} items)</p>
              <p>Rs {subtotal.toFixed(2)}</p>
            </div>
            {discount > 0 && (
              <div className='flex justify-between text-green-600'>
                <p>Discount</p>
                <p>- Rs {discount.toFixed(2)}</p>
              </div>
            )}
            <div className='flex justify-between text-[#2a4125]'>
              <p>Shipping</p>
              <p>{shipping === 0 ? 'FREE' : `Rs ${shipping}`}</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold text-lg text-[#2a4125]'>
              <p>Total</p>
              <p>PKR {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ///////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////// PARTIAL WORKING.. FIELDS ////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
