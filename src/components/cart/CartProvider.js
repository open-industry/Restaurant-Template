import { useState, createContext, useContext, useMemo } from 'react';
import CONSTANTS from '../../data/constants';

const { MINQTY } = CONSTANTS;

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartModule = useMemo(() => {
    const cartContent = cart;

    const addItem = (item, qty) => {
      const tempCart = [...cart];
      const newItemIndex = tempCart.findIndex((cartItem) => cartItem.item.id === item.id);
      if (newItemIndex === -1) {
        tempCart.push({ item, qty });
      } else {
        tempCart[newItemIndex].qty = qty;
      }
      setCart(() => [...tempCart.filter((cartItem) => cartItem.qty > MINQTY)]);
    };

    const updateCart = (invoice) => {
      const normalizeInvoice = invoice.map((invoiceItem) => {
        const { item, qty } = invoiceItem;
        return { item, qty };
      });

      setCart(() => normalizeInvoice.filter((cartItem) => cartItem.qty > MINQTY));
    };

    const clearCart = () => setCart(() => []);

    return {
      cartContent,
      addItem,
      updateCart,
      clearCart,
    };
  }, [cart]);

  return (
    <CartContext.Provider value={cartModule}>
      {children}
    </CartContext.Provider>
  );
}
