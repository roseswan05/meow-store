import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';


// Context Providers
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';

// Components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Auth from './components/Auth';
import Checkout from './components/Checkout';
import Orders from './components/Orders';

import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <OrderProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
              </Routes>
            </OrderProvider>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;