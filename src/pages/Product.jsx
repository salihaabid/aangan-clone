import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import {
  FaMinus,
  FaPlus,
  FaLeaf,
  FaCheckSquare,
  FaHeart,
  FaStar,
} from 'react-icons/fa';
import RelatedProducts from '../ui/RelatedProducts';
import { toast } from 'react-toastify';

export default function Product() {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // <-- NEW state

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        setSelectedSize(item.sizes[0]); // <-- Default first size
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    setQuantity(1); // reset quantity when product changes
  }, [productId, products]);

  if (!productData) {
    return <div className='opacity-0'>Loading...</div>;
  }

  return (
    <>
      <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Left Side - Images */}
        <div>
          <img
            src={image}
            alt={productData.name}
            className='rounded-xl shadow-lg w-full'
          />
          <div className='flex gap-3 mt-4'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                onClick={() => setImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  img === image ? 'border-[#2a4125]' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div>
          {/* Title */}
          <h1 className='text-3xl font-semibold text-[#2a4125]'>
            {productData.name}
          </h1>

          {/* Price */}
          <p className='text-2xl font-bold text-[#2a4125] mt-2'>
            Rs.{productData.price}.00 PKR
          </p>

          {/* Rating */}
          <div className='flex items-center gap-2 mt-2 text-yellow-500'>
            <FaStar size={18} fill='currentColor' />
            <span className='text-gray-700 font-medium'>
              {productData.rating} / 5
            </span>
          </div>

          {/* Quantity Selector */}
          <div className='flex items-center mt-5 gap-3'>
            <button
              className='p-2 border rounded-md cursor-pointer'
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <FaMinus size={16} />
            </button>
            <span>{quantity}</span>
            <button
              className='p-2 border rounded-md cursor-pointer'
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus size={16} />
            </button>
            <span className='ml-3 text-[#2a4125] font-medium'>✅ In Stock</span>
          </div>

          {/* Sizes */}
          <div className='mt-5'>
            <h3 className='font-medium text-gray-800 mb-2'>Available Sizes:</h3>
            <div className='flex gap-3'>
              {productData.sizes.map((size, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 rounded-full cursor-pointer border 
        ${
          selectedSize === size
            ? 'bg-[#2a4125] text-[#fef7e5] border-[#2a4125]'
            : 'border-[#2a4125] text-[#2a4125]'
        }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className='flex gap-8 mt-6 text-[#2a4125]'>
            <div className='flex items-center gap-2'>
              <FaLeaf size={18} /> Natural Product
            </div>
            <div className='flex items-center gap-2'>
              <FaCheckSquare size={18} /> Daily Fresh
            </div>
            <div className='flex items-center gap-2'>
              <FaHeart size={18} /> Best Quality
            </div>
          </div>

          {/* Buttons */}
          <div className='mt-6 flex gap-4'>
            <button
              className='flex-1 border border-[#2a4125] py-3 rounded-full text-[#2a4125] cursor-pointer'
              onClick={() => {
                addToCart(productData._id, quantity, selectedSize);
                toast.success(`${productData.name} added to cart!`);
              }}
              // Pass selected size to addToCart
            >
              Add to cart
            </button>
            <button className='flex-1 bg-[#2a4125] text-white py-3 rounded-full cursor-pointer '>
              Buy it now
            </button>
          </div>

          {/* Description */}
          <p className='mt-6 text-gray-700 leading-relaxed'>
            {productData.description}
          </p>

          {/* Collapsible Sections */}
          <div className='mt-6 border-t pt-4'>
            <details>
              <summary className='cursor-pointer font-medium'>About Us</summary>
              <p className='mt-2 text-gray-600'>
                We provide the freshest cheese products with premium quality
                directly from Aangan Dairy.
              </p>
            </details>

            <details className='mt-4'>
              <summary className='cursor-pointer font-medium'>
                Shipping Policy
              </summary>
              <p className='mt-2 text-gray-600'>
                Shipping calculated at checkout. Usually delivered in 2–3
                working days.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} />
    </>
  );
}
