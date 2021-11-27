import React from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import NavLinks from './components/NavLinks.js';
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
        <div className="box">
          <div className="container has-background-white">
            <div className="tabs is-large is-boxed is-centered desktop">
              <ul>
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="container has-background-white">
            <Routes>
              <Route path="/menu" element={<Menu/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
