import React from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import HorizontalNav from './components/HorizontalNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { NavProvider } from './components/NavLinks';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <header className="hero has-text-centered has-background-danger-dark">
        <h1 className="title is-1 has-text-warning">McDnld's Rstrnt</h1>
        <h2 className="subtitle is-3 has-text-white-ter">Fine Dilatory Cuisine</h2>
      </header>
      <main className="section has-background-danger-dark">
        <NavProvider>
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
        </NavProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
