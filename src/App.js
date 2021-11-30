import React from 'react';
// BrowserRouter in index.js
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import NavLinks from './components/NavLinks.js';
import Sidebar from './components/Sidebar.js';
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
        <Sidebar />
        <div className="box">
          <div className="tabs is-large is-boxed is-centered is-hidden-touch">
            <ul>
              <NavLinks />
            </ul>
          </div>
          <div className="is-flex is-flex-direction-column is-align-items-center has-background-white">
            <Routes>
              <Route path="/menu" element={<Menu/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </main>
      {/* <footer className="is-flex is-justify-content-center">
        <a href="https://github.com/anon-legion" target="_blank" rel="noreferrer nofollow">
          <p className="is-clickable is-size-5 has-text-grey-dark">Copyright © 2021 =GV=
            <span className="icon-text">
              <span className="icon is-medium has-text-grey-dark">
                <i className="fab fa-github is-size-4"></i>
              </span>
            </span>
          </p>
        </a>
      </footer> */}
    </>
  );
}

export default App;
