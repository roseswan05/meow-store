import React from 'react';
import { useProduct } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useProduct();
  const { addToCart } = useCart(); 

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;