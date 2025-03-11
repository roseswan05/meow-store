
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { user, logout } = useUser(); 
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <span>Welcome, {user?.name || 'Guest'}</span>
      <span>Cart: {cartCount} items</span>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/auth">Login/Signup</Link>
      )}
    </nav>
  );
};

export default Navbar;