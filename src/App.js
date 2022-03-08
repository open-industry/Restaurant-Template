import React, { useState } from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import HorizontalNav from './components/HorizontalNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { LocationProvider } from './components/navContext';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      itemInCart.qty += qty;
    } else {
      setCart((prevState) => [...prevState, { ...item, qty }]);
    }
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
        <LocationProvider>
          <div className="container is-flex is-align-items-center is-justify-right-desktop" style={{ position: 'initial' }}>
            <Sidebar />
            <button className="icon is-medium" type="button">
              <TiShoppingCart color="#f5f5f5" size="29px" />
            </button>
          </div>
          <div className="container">
            <div className="box">
              <HorizontalNav />
              <Routes>
                <Route path="/menu" element={<Menu cart={cart} addToCart={addItem} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </LocationProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
