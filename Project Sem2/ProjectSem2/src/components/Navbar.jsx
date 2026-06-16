import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

<link to="/Cart">
{totalItems}
</link>
function Navbar({ searchTerm, setSearchTerm }) {
  const { cart } = useCart();
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  <div className="cart">
    {totalItems}
  </div>

  return (
    <header className="navbar">

      <div className="logo">
        <h2>Amazon</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <button>Search</button>
      </div>

      <div className="cart">
        🛒 {cart.length}
      </div>

    </header>
  );
}

export default Navbar;