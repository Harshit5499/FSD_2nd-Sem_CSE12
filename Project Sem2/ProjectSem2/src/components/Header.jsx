import {
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart
} from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        amazon<span>.in</span>
      </div>

      <div className="location">
        <FaMapMarkerAlt />
        <div>
          <small>Deliver to</small>
          <p>India</p>
        </div>
      </div>

      <div className="searchBar">

        <select>
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
        />

        <button>
          <FaSearch />
        </button>

      </div>

      <div className="headerLinks">
        <div>
          <small>Hello, Sign in</small>
          <p>Account & Lists</p>
        </div>

        <div>
          <small>Returns</small>
          <p>& Orders</p>
        </div>

        <div className="cart">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </div>

    </header>
  );
}

export default Header;