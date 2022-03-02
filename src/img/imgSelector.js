import hamburger from './hamburger_nobg.png';
import chicken from './chicken_nobg.png';
import drink from './drink_nobg.png';
import steak from './steak_nobg.png';

export default function imgSelector(str) {
  switch (str) {
    case 'funny burger':
      return hamburger;
    case 'fried bat':
      return chicken;
    case 'hilarious steak':
      return steak;
    case 'facetious drink':
      return drink;
    default:
      return null;
  }
}
