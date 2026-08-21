function Navbar({ totalQty, setIsCartOpen, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-right">
        <input 
          type="text" 
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