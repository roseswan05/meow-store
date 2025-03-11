import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', sort: '', search: '' });

  // useEffect(() => {
  //   // Mock API call
  //   const mockProducts = [
  //     { id: 1, name: 'Product 1', price: 10, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  //     { id: 2, name: 'Product 2', price: 20, category: 'Clothing', image: 'https://via.placeholder.com/150' },
  //     { id: 3, name: 'Product 3', price: 30, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  //   ];
  //   setProducts(mockProducts);
  //   setCategories(['Electronics', 'Clothing']);
  // }, []);
  useEffect(() => {
    // Mock API call
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        category: 'clothing',
        image: '/images/product1.webp', // Replace with your image path
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        category: 'Clothing',
        image: '/images/product2.webp', // Replace with your image path
      },
      {
        id: 3,
        name: 'Product 3',
        price: 30,
        category: 'Clothing',
        image: '/images/product3.webp', // Replace with your image path
      },
    ];
    setProducts(mockProducts);
    setCategories(['Electronics', 'Clothing']);
  }, []);
  <img src="/images/product1.jpg" alt="Test Image" />

  const filteredProducts = useMemo(() => {
    let result = products;
    if (filters.category) {
      result = result.filter((product) => product.category === filters.category);
    }
    if (filters.search) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.sort === 'price_asc') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price_desc') {
      result = result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [products, filters]);

  return (
    <ProductContext.Provider value={{ products: filteredProducts, categories, filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return { products: context.products, categories: context.categories, filters: context.filters, setFilters: context.setFilters };
};