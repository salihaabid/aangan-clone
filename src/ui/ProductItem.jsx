import { Link } from 'react-router-dom';

export default function ProductItem({
  product,
  id,
  image,
  name,
  price,
  brand,
  rating,
}) {
  console.log(id, name, image, price, brand, rating);
  return (
    <div className='p-4 flex flex-col items-center group cursor-pointer'>
      {/* Product Image */}
      <div className='w-full rounded-xl relative h-48 sm:h-56 lg:h-64'>
        {product.image.length === 1 ? (
          // 🔹 Single Image
          <img
            src={product.image[0]}
            alt={name}
            className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          // 🔹 Two Images (hover effect triggered on card hover)
          <>
            {/* First Image */}
            <img
              src={product.image[0]}
              alt={name}
              className='w-full h-full object-cover rounded-xl absolute inset-0 transition-opacity duration-500 group-hover:opacity-0'
            />
            {/* Second Image */}
            <img
              src={product.image[1]}
              alt={name}
              className='w-full h-full object-cover rounded-xl transition-transform transition-opacity duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-0'
            />
          </>
        )}
      </div>

      {/* Info */}
      <div className='text-center mt-4 flex-1 flex flex-col justify-between'>
        <div>
          <h3 className='text-[15px] sm:text-[17px] lg:text-[19px] font-medium text-[#2a4125] group-hover:underline underline-offset-4 decoration-[#2a4125] line-clamp-2'>
            {name}
          </h3>
          <p className='text-xs sm:text-sm uppercase tracking-wide mt-1 text-[#77846a]'>
            {brand}
          </p>

          {/* Rating */}
          {/* Rating */}
          {rating !== undefined && rating !== null && (
            <div className='flex items-center justify-center gap-1 mt-2'>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-[#2a4125] text-[14px] sm:text-[16px] lg:text-[18px] pr-1 ${
                    i < rating ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className='text-xs sm:text-sm text-[#2a4125] ml-1'>
                ({rating})
              </span>
            </div>
          )}

          {/* Price */}
          <p className='mt-2 text-sm sm:text-base lg:text-[21px] text-[#2a4125] font-medium'>
            From Rs.{price}.00 PKR
          </p>
        </div>
      </div>

      {/* Button */}
      <Link
        to={`/product/${id}`}
        className='mt-4 w-full text-center border-2 border-[#410d1f] text-[#410d1f]
                   px-4 py-2 sm:px-6 sm:py-2 rounded-full
                   text-sm sm:text-base
                   transition-transform duration-300 hover:-translate-y-1 shadow-md'
      >
        Add to Cart
      </Link>
    </div>
  );
}
