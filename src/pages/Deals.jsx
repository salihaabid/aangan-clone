import ProductsPageTitle from '../ui/ProductsPageTitle';
import ProductItem from '../ui/ProductItem';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import FilterBar from '../ui/FilterBar'; // 👈 import reusable filter bar
import { useProductFilter } from '../hooks/useProductFilter'; // 👈 import custom hook

export default function BestSeller() {
  const { products } = useContext(ShopContext);

  // Pick only best-sellers (deals = true)
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const filtered = products.filter((p) => p.deal === true);
    setBestSellers(filtered);
  }, [products]);

  // Apply filtering + sorting
  const { filteredProducts, setFilters } = useProductFilter(bestSellers);

  return (
    <div className='my-10 sm:my-15'>
      <ProductsPageTitle
        title='Deals'
        description='Save more with Aangan Dairy’s cheese deals! Get premium mozzarella, cheddar, pizza cheese, and blends at special prices perfect for bulk buyers and cheese lovers.'
      />

      {/* 🔹 Filter bar (sort + price range) */}
      <div className='mb-6 px-4'>
        <FilterBar
          setFilters={setFilters}
          maxPrice={Math.max(...bestSellers.map((p) => p.price))}
          productCount={filteredProducts.length}
        />
      </div>

      {/* 🔹 Grid of products */}
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6 ml-14'>
        {filteredProducts.map((product) => (
          <ProductItem
            product={product}
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
