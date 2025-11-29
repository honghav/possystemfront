"use client";
import { useCart } from "../../components/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? <p>No items in cart</p> : null}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
}
