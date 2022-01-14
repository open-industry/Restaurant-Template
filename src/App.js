import React from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import HorizontalNav from './components/HorizontalNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { LocationProvider } from './components/navContext';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <header className="hero has-text-centered has-background-danger-dark">
        <div className="hero-body">
          <h1 className="title is-1 has-text-warning">McDnld's Rstrnt</h1>
          <h2 className="subtitle is-3 has-text-white-ter">Fine Dilatory Cuisine</h2>
        </div>
      </header>
      <main className="section has-background-danger-dark">
        <LocationProvider>
          <Sidebar />
          <div className="container">
            <div className="box">
              <HorizontalNav />
              <Routes>
                <Route path="/menu" element={<Menu />} />
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
