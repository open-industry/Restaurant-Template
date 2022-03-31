import { FaUtensils, FaPhoneAlt } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import CONSTANTS from '../data/constants';
import hamburger from './hamburger_nobg.png';
import chicken from './chicken_nobg.png';
import drink from './drink_nobg.png';
import steak from './steak_nobg.png';
import btc from './btc.png';
import ada from './ada.png';
import usdt from './usdt.png';
import bnb from './bnb.png';
import emptyCart from './empty-cart.svg';

const { NAVITEMS } = CONSTANTS;

// helper function to select images from folder
// expects one argument str: string
export default function imgSelector(str) {
  switch (str) {
    case NAVITEMS.HOME:
      return <IoHomeSharp />;
    case NAVITEMS.MENU:
      return <FaUtensils />;
    case NAVITEMS.CONTACT:
      return <FaPhoneAlt />;
    case 'funny burger':
      return hamburger;
    case 'fried bat':
      return chicken;
    case 'hilarious steak':
      return steak;
    case 'facetious drink':
      return drink;
    case 'bitcoin':
      return btc;
    case 'cardano':
      return ada;
    case 'tether':
      return usdt;
    case 'bnb':
      return bnb;
    case 'cart empty':
      return emptyCart;
    default:
      return null;
  }
}
