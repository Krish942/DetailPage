import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import RelatedProducts from './components/RelatedProducts';



const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductDetail />
        <RelatedProducts />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
