import '../styles/ProductDetail.css';

const ProductDetail = () => {
  return (
    <section className="product-detail">
      <div className="product-images">
        <img
          src="/assets/journal.jpg"
          alt="Customized Journal"
          className="main-image"
        />
        <div className="thumbnail-images">
          <img src="/assets/journal1.jpg" alt="Thumbnail 1" />
          <img src="/assets/journal2.jpg" alt="Thumbnail 2" />
        </div>
      </div>
      <div className="product-info">
        <h2>Customized Journal</h2>
        <p className="price">499 Rs</p>
        <button className="add-to-cart">Add to Cart</button>
        <p className="description">
          This customizable journal is perfect for your notes, ideas, and
          creative thoughts.
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;
