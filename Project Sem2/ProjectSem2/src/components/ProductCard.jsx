function ProductCard({ product }) {
  return (
    <div className="card">

      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
      />

      <a href="#">
        See More
      </a>

    </div>
  );
}

export default ProductCard;