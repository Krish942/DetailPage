
import "../styles/RelatedProducts.css";

const RelatedProducts = () => {
  const products = [
    { id: 1, name: 'Designer Sticky Notes', price: 100, image: '/assets/sticky-notes.jpg' },
    { id: 2, name: 'Handcrafted Notebooks', price: 150, image: '/assets/notebooks.jpg' },
    { id: 3, name: 'Foldable Desk Calendar', price: 200, image: '/assets/calendar.jpg' },
    { id: 4, name: 'Customized Envelope Sets', price: 250, image: '/assets/envelope.jpg' },
  ];

  return (
    <section className="related-products">
      <h3>Related Products</h3>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="price">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
