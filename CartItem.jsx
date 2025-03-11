const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    );
  };
  
  export default CartItem;