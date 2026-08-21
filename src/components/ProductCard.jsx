function ProductCard({ product, addToCart, buyNow }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button className="add-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
      <button className="buy-btn-small" onClick={() => buyNow(product.id)}>Buy Now</button>
    </div>
  );
}
export default ProductCard;