"use client";
import { useCart } from "./CartContext";

export default function OrderHistory() {
  const { orders } = useCart();

  if (orders.length === 0) return <p>No orders yet</p>;

  return (
    <div style={{ marginTop: 20, border: "1px solid #ddd", padding: 16 }}>
      {orders.map((order) => (
        <div key={order.id} style={{ marginBottom: 12, borderBottom: "1px solid #ccc", paddingBottom: 6 }}>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          <p><strong>Items:</strong></p>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>{item.name} x {item.qty} = ${(item.price*item.qty).toFixed(2)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
