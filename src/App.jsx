import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const products = [
    { id: 1, name: "Black T-Shirt", price: 499, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
    { id: 2, name: "Running Shoes", price: 1999, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 3, name: "Headphones", price: 1299, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 4, name: "Backpack", price: 899, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 5, name: "Smart Watch", price: 2499, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 6, name: "Sunglasses", price: 699, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" }
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const addToCart = (id) => {
    const existing = cart.find(c => c.id === id);
    if (existing) {
      setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      const item = products.find(p => p.id === id);
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter(c => c.id !== id));
  const buyNow = (id) => { addToCart(id); setIsCartOpen(true); };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Navbar totalQty={totalQty} setIsCartOpen={setIsCartOpen} search={search} setSearch={setSearch} />
      <Header />
      <h2 className="section-title" id="products">Our Products</h2>
      <div className="products">
        {filtered.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} buyNow={buyNow} />)}
      </div>
      <Cart cart={cart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} removeItem={removeItem} total={total} setCart={setCart} />
      <Footer />
    </>
  );
}
export default App;