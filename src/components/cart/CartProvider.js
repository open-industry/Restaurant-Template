import { useState, createContext, useContext, useMemo } from 'react';

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
        tempCart[newItemIndex].item.qty = qty;
      }
      setCart(() => [...tempCart]);
    };

    return {
      cartContent,
      addItem,
    };
  }, [cart]);

  return (
    <CartContext.Provider value={cartModule}>
      {children}
    </CartContext.Provider>
  );
}
