import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section className="products">

      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}

    </section>
  );
}

export default ProductSection;