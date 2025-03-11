import { useOrder } from '../contexts/OrderContext';

const Orders = () => {
  const { orders } = useOrder();

  return (
    <div className="orders">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order">
            <h3>Order #{index + 1}</h3>
            <p>Total: ${order.total.toFixed(2)}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;