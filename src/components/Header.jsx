function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Apni Dukan Ke Best Deals</h1>
        <p>Quality products, low price. Simple shopping.</p>
        <button onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})}>
          Shop Now
        </button>
      </div>
      <div className="header-img">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" alt="" />
      </div>
    </header>
  );
}
export default Header;