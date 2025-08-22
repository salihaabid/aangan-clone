import { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // ✅ Load saved orders once
  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem('checkedOutOrders')) || [];
    setOrders(savedOrders);
  }, []);

  // ✅ Clear all orders
  const clearOrders = () => {
    localStorage.removeItem('checkedOutOrders');
    setOrders([]);
  };

  return (
    <div className='min-h-screen py-10 px-4'>
      {/* Title + Clear Button */}
      <div className='flex justify-between items-center max-w-5xl mx-auto mb-8'>
        <h1 className='text-4xl font-semibold text-[#2a4125]'>My Orders</h1>

        {orders.length > 0 && (
          <button
            onClick={clearOrders}
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
          >
            Clear Orders
          </button>
        )}
      </div>

      {/* Orders List */}
      <div className='space-y-6 max-w-5xl mx-auto'>
        {orders.length === 0 ? (
          <p className='text-center text-[#77846a] text-lg'>No orders yet 🛒</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className='border border-[#77846a]/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between '
            >
              {/* Product Info */}
              <div className='flex items-start gap-4'>
                <img
                  src={order.img}
                  alt={order.product}
                  className='w-20 h-20 object-cover rounded-lg border'
                />
                <div>
                  <h2 className='text-lg font-medium text-[#2a4125]'>
                    {order.product}
                  </h2>
                  <p className='text-[#2a4125]'>{order.price}</p>
                  <p className='text-[#77846a] text-sm'>
                    Quantity: {order.quantity} | Size: {order.size}
                  </p>
                  <p className='text-[#77846a] text-sm'>Date: {order.date}</p>
                </div>
              </div>

              {/* Status + Action */}
              <div className='flex flex-col items-center sm:items-end justify-center mt-4 sm:mt-0'>
                <span
                  className={`text-sm font-medium flex items-center gap-1 ${
                    order.status === 'Delivered'
                      ? 'text-green-700'
                      : 'text-yellow-600'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-600'
                        : 'bg-yellow-500'
                    }`}
                  ></span>
                  {order.status}
                </span>
                <button className='mt-2 px-4 py-1 border rounded-md text-[#77846a] hover:bg-gray-100 transition'>
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
