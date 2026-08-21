function Cart({ cart, isCartOpen, setIsCartOpen, removeItem, total, setCart }) {
  return (
    <div className={`cart-box ${isCartOpen ? "active" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <span onClick={() => setIsCartOpen(false)}>X</span>
      </div>
      {cart.length === 0 && <p style={{marginTop: '20px'}}>Cart khali hai</p>}
      {cart.map(c => (
        <div className="cart-item" key={c.id}>
          <span>{c.name} x {c.qty}</span>
          <span>Rs.{c.price * c.qty} <button onClick={() => removeItem(c.id)}>remove</button></span>
        </div>
      ))}
      <div className="cart-total">
        <p>Total: Rs. {total}</p>
        <button className="buy-btn" onClick={() => {
          if(cart.length === 0) return alert("Cart empty hai!");
          alert(`Order Placed! Total Rs.${total}`);
          setCart([]);
          setIsCartOpen(false);
        }}>Buy Now</button>
      </div>
    </div>
  );
}
export default Cart;