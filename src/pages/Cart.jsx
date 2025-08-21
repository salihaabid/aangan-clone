import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
export default function Cart() {
  const { products, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const itemsArray = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          const product = products.find((p) => p._id === items);
          if (product) {
            itemsArray.push({
              id: items,
              size: item,
              quantity: cartItems[items][item],
              // price: product.price,
              // name: product.name,
              // image: product.image,
            });
          }
        }
      }
    }
    setCartData('Cart Items:', itemsArray);
  }, [cartItems]);

  return <div>CART PAGE</div>;
}

// import CartItem from '../ui/CartItems';

// export default function Cart() {
//   // Convert cartItems object → array for looping
//   const itemsArray = [];
//   for (let productId in cartItems) {
//     for (let size in cartItems[productId]) {
//       itemsArray.push({
//         id: productId,
//         size,
//         quantity: cartItems[productId][size].quantity,
//         price: cartItems[productId][size].price,
//         name: cartItems[productId][size].name,
//         image: cartItems[productId][size].image,
//       });
//     }
//   }

//   const totalPrice = itemsArray.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className='p-6'>
//       {itemsArray.length === 0 ? (
//         // 🔹 Empty Cart Layout
//         <div className='text-center mt-20'>
//           <h2 className='text-3xl font-bold text-[#2a4125]'>
//             Your cart is empty
//           </h2>
//           <button className='mt-6 px-6 py-3 bg-[#2a4125] text-[#fef7e5] rounded-full shadow-md hover:translate-y-[-2px] transition'>
//             Continue shopping
//           </button>
//           <p className='mt-8 text-lg'>
//             Have an account?{' '}
//             <a href='/login' className='text-red-700 underline'>
//               Log in
//             </a>{' '}
//             to check out faster.
//           </p>
//         </div>
//       ) : (
//         // 🔹 Cart with Items Layout
//         <div>
//           <h2 className='text-3xl font-bold mb-6'>Your cart</h2>

//           <div className='flex flex-col gap-4'>
//             {itemsArray.map((item) => (
//               <CartItem
//                 key={`${item.id}-${item.size}`}
//                 item={item}
//                 onIncrease={() => increaseQty(item.id, item.size)}
//                 onDecrease={() => decreaseQty(item.id, item.size)}
//                 onRemove={() => removeFromCart(item.id, item.size)}
//               />
//             ))}
//           </div>

//           {/* Total + Checkout */}
//           <div className='mt-10 flex justify-between items-center border-t pt-6'>
//             <p className='text-xl font-semibold'>
//               Estimated total: Rs.{totalPrice.toLocaleString()}
//             </p>
//             <button className='px-6 py-3 bg-[#2a4125] text-[#fef7e5] rounded-full shadow-md hover:translate-y-[-2px] transition'>
//               Check out
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
