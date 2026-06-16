const menuItems = [
    'All', "Today's Deals", 'Customer Service', 'Bestsellers', 'Gift Cards',
    'Prime', 'Books', 'Computers', 'Electronics', 'MX Player', 'Fashion', 
    'Home & Kitchen', 'Mobiles',
]
function Menu() {
  return (
    <nav id="menu" className="menu">
      {items.map((item) => (
        <a key={item} href="#">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Menu;