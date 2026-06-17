import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <p>
        <FaBars />
        All
      </p>

      <p>Today's Deals</p>
      <p>Best Sellers</p>
      <p>Mobiles</p>
      <p>Electronics</p>
      <p>Fashion</p>
      <p>Prime</p>
      <p>Customer Service</p>

    </nav>
  );
}

export default Navbar;