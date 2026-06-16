import { products } from "../data/products";

function ProductGrid() {
  return (
    <main className="products">
      {products.map((product) => (
        <div
          className="product"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button>
            Add to Cart
          </button>
        </div>
      ))}
    </main>
  );
}

export default ProductGrid;