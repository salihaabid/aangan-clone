import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import HomeTitle from './HomeTitle';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // only products where bestseller = true
    const filtered = products.filter((p) => p.deal === true);
    setBestSellers(filtered);
  }, [products]);

  return (
    <div className='my-10 sm:my-15'>
      <HomeTitle text='Deals & Combos' />

      {/* 🔹 Now phone also has 2 columns */}
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6'>
        {bestSellers.map((product) => (
          <ProductItem
            product={product}
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            brand={product.brand}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
