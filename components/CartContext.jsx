"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const placeOrder = (customer) => {
    if (!customer || cart.length === 0) return false;

    const newOrder = {
      id: Date.now(),
      customer,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      date: new Date().toLocaleString(),
    };

    setOrders([...orders, newOrder]);
    setCart([]); // clear cart after order
    return true;
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, orders, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
