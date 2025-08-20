import ProductsPageTitle from '../ui/ProductsPageTitle';
import ProductItem from '../ui/ProductItem';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import FilterBar from '../ui/FilterBar'; // 👈 reusable filter bar
import { useProductFilter } from '../hooks/useProductFilter'; // 👈 custom hook

export default function ProductsPage() {
  const { products } = useContext(ShopContext);

  // pass ALL products into your hook
  const { filteredProducts, setFilters } = useProductFilter(products);

  return (
    <div className='my-10 sm:my-15'>
      <ProductsPageTitle title='Products' />

      {/* 🔹 Filter bar (sort + price range) */}
      <div className='mb-6 px-4'>
        <FilterBar
          setFilters={setFilters}
          maxPrice={Math.max(...products.map((p) => p.price))} // highest price from all products
          productCount={filteredProducts.length} // how many items after filtering
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
