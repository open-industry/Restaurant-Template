import React, { useState } from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import HorizontalNav from './components/nav/HorizontalNav';
import Sidebar from './components/nav/Sidebar';
import Footer from './components/Footer';
import CartContent from './components/cart/CartContent';
// import { LocationProvider } from './components/nav/navContext';
import { CartProvider } from './components/cart/CartProvider';
import './App.css';

function App() {
  const [isShowCart, setIsShowCart] = useState(() => false);

  const toggleShowCart = () => {
    setIsShowCart((prevState) => !prevState);
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
        <CartProvider>
          <div className="container is-flex is-align-items-center is-justify-right-desktop" style={{ position: 'initial' }}>
            <Sidebar />
            <button className="icon is-medium is-clickable" type="button" onClick={toggleShowCart}>
              <TiShoppingCart color="#f5f5f5" size="29px" />
            </button>
          </div>
          <div className="container">
            <div className="box">
              <HorizontalNav />
              <CartContent isShowCart={isShowCart} toggleShowCart={toggleShowCart} />
              <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </CartProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
