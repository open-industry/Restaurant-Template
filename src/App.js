import React, { useEffect, useState } from 'react';
// BrowserRouter in index.js
import { Route, Routes, Navigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import HorizontalNav from './components/nav/HorizontalNav';
import Sidebar from './components/nav/Sidebar';
import Footer from './components/Footer';
import CartContent from './components/cart/CartContent';
import { useCartContext } from './components/cart/CartProvider';
import './App.css';

function App() {
  const [isShowCart, setIsShowCart] = useState(() => false);

  // open/close sidebar
  const [sidebar, setSidebar] = useState(() => false);

  useEffect(() => {
    if (isShowCart) setSidebar(() => false);
  }, [isShowCart]);

  const { cartContent } = useCartContext();

  const toggleShowCart = () => {
    setIsShowCart((prevState) => !prevState);
  };

  const hideCart = () => {
    setIsShowCart(() => false);
  };

  // toggle sidebar for onClick of hamburger icon
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebar(() => false);
  };

  return (
    <>
      <header className="hero has-text-centered has-background-danger-dark">
        <div className="hero-body pb-0">
          <h1 className="title is-1 has-text-warning">McDnld's Rstrnt</h1>
          <h2 className="subtitle is-3 has-text-white-ter">Fine Dilatory Cuisine</h2>
        </div>
      </header>
      <main className="section has-background-danger-dark">
        <div className="container is-flex is-align-items-center is-justify-right-desktop" style={{ position: 'initial' }}>
          <Sidebar onClick={toggleSidebar} sidebar={sidebar} />
          <button id="cart-button" className="icon is-medium is-clickable badge" value={cartContent.length} type="button" onClick={toggleShowCart}>
            <i><TiShoppingCart color="#f5f5f5" size="29px" /></i>
          </button>
        </div>
        <div className="container">
          <div className="box">
            <HorizontalNav />
            <CartContent isShowCart={isShowCart} toggleShowCart={toggleShowCart} hideCart={hideCart} />
            <Routes>
              <Route path="/menu" element={<Menu closeSidebar={closeSidebar} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={cartContent.length > 0 ? <Checkout /> : <Navigate to="/menu" />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
