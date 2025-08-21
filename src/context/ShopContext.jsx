import { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryCharges = 200;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  // const addToCart = async (productId, size) => {
  //   let cartData = structuredClone(cartItems);
  //   if (cartData[productId]) {
  //     if (cartData[productId][size]) {
  //       cartData[productId][size] += 1;
  //     } else {
  //       cartData[productId][size] = 1;
  //     }
  //   } else {
  //     cartData[productId] = {};
  //     cartData[productId][size] = 1;
  //   }
  //   setCartItems(cartData);
  // };
  const addToCart = async (productId, quantity = 1, size) => {
    let cartData = structuredClone(cartItems);

    // If product already exists
    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += quantity; // increment existing size quantity
      } else {
        cartData[productId][size] = quantity; // new size for this product
      }
    } else {
      // New product in cart
      cartData[productId] = {};
      cartData[productId][size] = quantity;
    }

    setCartItems(cartData);
    console.log('Updated Cart:', cartData); // ✅ debug log
  };

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems);
  }, [cartItems]);
  const value = {
    products,
    deliveryCharges,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
