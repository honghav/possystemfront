"use client";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function OrderForm() {
  const { cart, placeOrder } = useCart();
  const [customer, setCustomer] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (!customer) {
      alert("Enter customer name");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const ok = placeOrder(customer);
    if (ok) {
      setSuccess(true);
      setCustomer("");
      setTimeout(() => setSuccess(false), 3000); // hide message after 3 sec
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, marginTop: 16 }}>
      {success && <p style={{ color: "green" }}>Order placed successfully ✅</p>}
      <h2>Place Order</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        style={{ width: "100%", padding: 6, marginBottom: 8 }}
      />

      <button
        onClick={handleOrder}
        style={{
          background: "green",
          color: "white",
          padding: "6px 12px",
          borderRadius: 4,
          cursor: "pointer",
          width: "100%",
        }}
      >
        Confirm Order
      </button>
    </div>
  );
}
