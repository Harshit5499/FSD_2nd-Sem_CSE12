import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>
            Qty: {item.quantity}
          </p>

          <p>
            ₹{item.price}
          </p>
        </div>
      ))}

      <h2>
        Total: ₹{totalPrice}
      </h2>

    </div>
  );
}

export default Cart;