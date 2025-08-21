// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import ProductItem from './ProductItem';
// import HomeTitle from './HomeTitle';

// export default function RelatedProducts({ category, subCategory }) {
//   const { products } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);
//   useEffect(() => {
//     if (products.length > 0) {
//       let productsCopy = products.slice();
//       productsCopy = productsCopy.filter((item) => category === item.category);
//       productsCopy = productsCopy.filter(
//         (item) => subCategory === item.subCategory
//       );
//       setRelated(productsCopy.slice(0, 4));
//     }
//   }, [products]);
//   return (
//     <div className='my-5 sm:my-5'>
//       <HomeTitle text='You may also like' />
//       <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6'>
//         {related.map((product) => (
//           <ProductItem
//             product={product}
//             key={product._id}
//             id={product._id}
//             image={product.image}
//             name={product.name}
//             price={product.price}
//             brand={product.brand}
//             rating={product.rating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import HomeTitle from './HomeTitle';

export default function RelatedProducts({ category }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      setRelated(productsCopy.slice(0, 4));
    }
  }, [products]);
  return (
    <div className='my-5 sm:my-5'>
      <HomeTitle text='You may also like' />
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-6'>
        {related.map((product) => (
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
