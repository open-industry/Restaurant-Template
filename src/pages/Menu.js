import React from 'react';
import hamburger from '../img/hamburger_nobg.png';
import steak from '../img/steak_nobg.png';
import friedBat from '../img/chicken_nobg.png';
import drink from '../img/drink_nobg.png';

export default function Menu() {

  return (
    <div className="tile is-ancestor is-justify-content-center">
      <div className="tile is-parent is-8 is-vertical is-align-items-center">
        <article className="tile is-child notification is-warning is-light p-5">
          <div className="card">
            <div className="card-image has-text-centered">
              <img src={hamburger} alt="burger"/>
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark">₳4.19</p>
              <p className="title is-5">Funny Burger</p>
            </div>
          </div>
        </article>
        <article className="tile is-child notification is-warning is-light p-5">
          <div className="card">
            <div className="card-image has-text-centered">
              <img src={friedBat} alt="fried bat"/>
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark">₳6.50</p>
              <p className="title is-5">Fried Bat</p>
            </div>
          </div>
        </article>
        <article className="tile is-child notification is-warning is-light p-5">
          <div className="card">
            <div className="card-image has-text-centered">
              <img src={steak} alt="steak"/>
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark">₳19.99</p>
              <p className="title is-5">Hilarious Steak</p>
            </div>
          </div>
        </article>
        <article className="tile is-child notification is-warning is-light p-5">
          <div className="card">
            <div className="card-image has-text-centered">
              <img src={drink} alt=""/>
            </div>
            <div className="card-content">
              <p className="has-text-warning-dark">₳3.00</p>
              <p className="title is-5">Facetious Drink</p>
            </div>
          </div>
        </article>
      </div>      
    </div>
  );
};