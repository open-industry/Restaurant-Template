import React from 'react';
import MenuItem from '../components/MenuItem';
import hamburger from '../img/hamburger_nobg.png';
import steak from '../img/steak_nobg.png';
import friedBat from '../img/chicken_nobg.png';
import drink from '../img/drink_nobg.png';

export default function Menu() {
  return (
    <div className="tile is-ancestor is-justify-content-center">
      <div className="tile is-parent is-8 is-vertical is-align-items-center">
        <MenuItem image={hamburger} name="Funny Burger" price="₳4.19" alt="burger" />
        <MenuItem image={friedBat} name="Fried Bat" price="₳6.50" alt="fried bat" />
        <MenuItem image={steak} name="Hilarious Steak" price="₳8.99" alt="steak" />
        <MenuItem image={drink} name="Fancy Drink" price="₳3.00" alt="soda" />
      </div>
    </div>
  );
}
