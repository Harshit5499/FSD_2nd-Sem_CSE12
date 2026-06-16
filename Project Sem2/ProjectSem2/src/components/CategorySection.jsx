function CategorySection({
  title,
  items,
  linkText,
}) {
  return (
    <div className="category-box">
      <h2>{title}</h2>

      <div className="flex-container">
        {items.map((item) => (
          <div
            className="pro1"
            key={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <a href="#">
        {linkText}
      </a>
    </div>
  );
}

export default CategorySection;