import { useNavigate } from 'react-router-dom';
import { useOrder } from '../contexts/OrderContext';
import { useCart } from "../contexts/CartContext";


const Checkout = () => {
  const { cart, cartCount } = useCart();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const order = { items: cart, total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) };
    placeOrder(order);
    navigate('/orders');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total Items: {cartCount}</p>
      <p>Total Price: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;