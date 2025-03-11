import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-page">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default CartPage;