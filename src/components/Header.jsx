import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">MERA Bestie</h1>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/occasions">Occasions</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
