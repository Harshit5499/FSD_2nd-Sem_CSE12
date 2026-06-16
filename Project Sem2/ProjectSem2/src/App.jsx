import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import SignInSection from "./components/SignInSection";
import Footer from "./components/Footer";

import { categories } from "./data/categories";

function App() {
  return (
    <>
      <Navbar />

      <Menu />

      <Hero />

      <div className="main-container">
        {categories.map((section) => (
          <CategorySection
            key={section.title}
            title={section.title}
            items={section.items}
            linkText={section.linkText}
          />
        ))}
      </div>

      <ProductGrid />

      <SignInSection />

      <Footer />
    </>
  );
}

export default App;