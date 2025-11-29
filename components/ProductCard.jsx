"use client";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="">
    <div style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}>
        <img
            src={product.image}
            alt={product.name}
            className="w-60 h-40 object-cover rounded border"
        />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "black",
          color: "white",
          padding: "6px 12px",
          borderRadius: 4,
          cursor: "pointer",
          marginTop: 8,
        }}
      >
        Add to Cart
      </button>
    </div>
    </div>
  );
}
