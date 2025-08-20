// SectionHeader.jsx
export default function ProductsPageTitle({ title, description }) {
  return (
    <div className='max-w-5xl mx-auto sm:mx-20 px-4 text-left'>
      {/* Title */}
      <h2 className='text-4xl sm:text-5xl md:text-6xl text-[#2a4125] leading-snug'>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className='mt-4 sm:mt-6 text-base sm:text-base md:text-md text-[#4b5943]/80 font-semibold md:font-[550] max-w-2xl'>
          {description}
        </p>
      )}
    </div>
  );
}
