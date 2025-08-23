import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { products, cartItems, updateQuantity, clearCart } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

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
    <div className='max-w-6xl mx-auto p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-5xl sm:text-4xl md:text-6xl font-medium text-[#2a4125]'>
          Your cart
        </h2>
        <Link
          to='/Collection'
          className='text-base sm:text-lg md:text-2xl text-[#2a4125] underline hover:text-[#3a5135]'
        >
          Continue shopping
        </Link>
      </div>

      {/* Header row */}
      <div className='grid grid-cols-2 text-[#77846a] text-sm font-medium py-5 pb-8'>
        <span className='justify-self-start'>PRODUCT</span>
        <span className='justify-self-end'>TOTAL</span>
      </div>

      <hr className='border border-[#77846a]/20' />
      {/* Cart items */}
      {/* Cart items */}
      <div className='space-y-4'>
        {cartData.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className='flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] items-start md:items-center gap-4 md:gap-6 py-6'
          >
            {/* PRODUCT */}
            <Link
              className='flex items-start space-x-4 flex-1 w-full'
              to={`/product/${item.id}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-28 h-28 object-cover rounded-lg shadow border-2 border-[#2a4125]'
              />
              <div className='flex flex-col'>
                <h3 className='text-sm uppercase tracking-wide text-[#77846a]'>
                  {item.brand || 'AANGAN DAIRY'}
                </h3>
                <h2 className='text-xl sm:text-2xl text-[#2a4125] leading-snug break-words width-[220px]'>
                  {item.name}
                </h2>
                <p className='text-sm sm:text-base text-[#77846a]'>
                  Rs.{item.price}.00
                </p>
                {item.size && (
                  <p className='text-xs text-[#77846a]'>Size: {item.size}</p>
                )}
              </div>
            </Link>

            {/* MOBILE: QUANTITY + BIN LEFT, PRICE RIGHT */}
            <div className='flex justify-between items-center w-full md:hidden'>
              <div className='flex items-center space-x-2'>
                <button
                  className='px-3 py-1 border border-[#77846a] border-[1.5px] rounded text-lg font-medium cursor-pointer'
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className='px-3 text-lg font-medium'>
                  {item.quantity}
                </span>
                <button
                  className='px-3 py-1 border border-[#77846a] border-[1.5px] rounded text-lg font-medium cursor-pointer'
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  className='ml-3 text-red-500 hover:text-red-700 text-xl cursor-pointer'
                  onClick={() => updateQuantity(item.id, item.size, 0)}
                >
                  🗑️
                </button>
              </div>
              <span className='text-[#2a4125] text-xl'>
                Rs.{item.price * item.quantity}.00
              </span>
            </div>

            {/* DESKTOP: QUANTITY CENTER */}
            <div className='hidden md:flex items-center justify-center w-full'>
              <div className='flex items-center space-x-2'>
                <button
                  className='px-3 py-1 border border-[#77846a] border-[1.5px] rounded text-lg font-medium cursor-pointer'
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className='px-3 text-lg font-medium'>
                  {item.quantity}
                </span>
                <button
                  className='px-3 py-1 border border-[#77846a] border-[1.5px] rounded text-lg font-medium cursor-pointer'
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* DESKTOP: PRICE + BIN RIGHT */}
            <div className='hidden md:flex items-center justify-end space-x-4 w-full'>
              <span className='text-[#2a4125] text-xl'>
                Rs.{item.price * item.quantity}.00
              </span>
              <button
                className='text-red-500 hover:text-red-700 text-xl cursor-pointer'
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
        <p className='text-sm text-[#77846a] mt-1'>
          Taxes, discounts and shipping calculated at checkout.
        </p>
        <button
          className='mt-4 bg-[#2a4125] text-white px-6 py-3 rounded-full shadow hover:bg-[#3a5135] transition cursor-pointer'
          onClick={() => {
            navigate('/CheckOut');
          }}
        >
          Check out
        </button>
      </div>
    </div>
  );
}
