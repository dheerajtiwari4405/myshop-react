function Navbar({ totalQty, setIsCartOpen, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>
      <ul className="nav-links">
        <li ><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <input 
          placeholder="Search..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span onClick={() => setIsCartOpen(true)}>Cart ({totalQty})</span>
      </div>
    </nav>
  );
}
export default Navbar;