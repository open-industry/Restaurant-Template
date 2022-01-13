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
        <MenuItem image={hamburger} name="Funnty Burger" price="₳4.19" />
        <MenuItem image={friedBat} name="Fried Bat" price="₳6.50" />
        <MenuItem image={steak} name="Hilarious Steak" price="₳8.99" />
        <MenuItem image={drink} name="Fancy Drink" price="₳3.00" />
      </div>
    </div>
  );
}
