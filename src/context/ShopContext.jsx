import { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryCharges = 200;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

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
  };

  const getCartCount = () => {
    let count = 0;

    // cartItems = { productId: { size: quantity } }
    for (let productId in cartItems) {
      for (let size in cartItems[productId]) {
        count += cartItems[productId][size];
      }
    }

    return count;
  };
  const clearCart = () => {
    setCartItems({}); // or your initial empty structure
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const value = {
    products,
    deliveryCharges,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    clearCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
