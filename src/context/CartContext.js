import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    return items.some((item) => item.id === id);
  };

  const getQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  const getProduct = (id) => {
    return items.find((item) => item.id === id);
  };

  const addItem = (newItem) => {
    if (!isInCart(newItem.id)) {
      setItems([...items, newItem]);
    } else {
      const newCart = items.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: newItem.quantity,
          };
        } else {
          return item;
        }
      });

      setItems(newCart);
    }
  };

  const removeItem = (id) => {
    const newCart = items.filter((item) => item.id !== id);
    setItems(newCart);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, getQuantity, getProduct, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
