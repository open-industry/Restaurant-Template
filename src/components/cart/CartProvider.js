import { useState, createContext, useContext, useMemo } from 'react';
import CONSTANTS from '../../data/constants';

// import minimum quantity value from constants
const { MINQTY } = CONSTANTS;

// initialize createContext hook
const CartContext = createContext();

// custom hook to consume CartContext
export function useCartContext() {
  return useContext(CartContext);
}

// CartProvider component expects one prop children: node
export function CartProvider({ children }) {
  // cart state for cart items
  const [cart, setCart] = useState([]);

  // memoized cartModule containing cart hooks to be passed in as value for context consumers
  // returns object containing custom hooks
  const cartModule = useMemo(() => {
    const cartContent = cart;

    // addItem hook to add items to cart state
    // expects two arguments item: object, qty: number
    const addItem = (item, qty) => {
      // create shallow copy of cart state
      const tempCart = [...cart];
      // check if item is already in cart
      const newItemIndex = tempCart.findIndex((cartItem) => cartItem.item.id === item.id);
      // if item is not in cart, add item to cart
      if (newItemIndex === -1) {
        tempCart.push({ item, qty });
      } else {
        // if item is in cart, update quantity
        tempCart[newItemIndex].qty = qty;
      }
      // update cart state items with qunatity greater than minimum quantity only
      setCart(() => [...tempCart.filter((cartItem) => cartItem.qty > MINQTY)]);
    };

    // updateCart hook updates cart state from invoice
    // expects one argument invoice: array
    const updateCart = (invoice) => {
      // normalize data
      const normalizeInvoice = invoice.map((invoiceItem) => {
        // destructure item and qty property from invoiceItem object and return new object, excludes subtotal property
        const { item, qty } = invoiceItem;
        return { item, qty };
      });

      // update cart state with normalized invoice
      setCart(() => normalizeInvoice.filter((cartItem) => cartItem.qty > MINQTY));
    };

    // clearCart hook sets cart state to empty array
    const clearCart = () => setCart(() => []);

    return {
      cartContent,
      addItem,
      updateCart,
      clearCart,
    };
  }, [cart]);

  return (
    // provide cartModule as value for context consumers
    <CartContext.Provider value={cartModule}>
      {children}
    </CartContext.Provider>
  );
}
