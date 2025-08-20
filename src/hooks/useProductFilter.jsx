import { useState, useEffect } from 'react';

export const useProductFilter = (products) => {
  const [filters, setFilters] = useState({
    sortBy: 'best-selling',
    priceRange: { min: '', max: '' },
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let updated = [...products];

    // Apply Price Filter
    if (filters.priceRange.min !== '')
      updated = updated.filter(
        (p) => p.price >= Number(filters.priceRange.min)
      );
    if (filters.priceRange.max !== '')
      updated = updated.filter(
        (p) => p.price <= Number(filters.priceRange.max)
      );

    // Apply Sort Filter
    switch (filters.sortBy) {
      case 'az':
        updated.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        updated.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        updated.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        updated.sort((a, b) => b.price - a.price);
        break;
      case 'new-old':
        updated.reverse(); // mock for demo
        break;
      default:
        break;
    }

    setFilteredProducts(updated);
  }, [filters, products]);

  return { filteredProducts, setFilters };
};
