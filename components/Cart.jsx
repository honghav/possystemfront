"use client";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, updateQty } = useCart(); 
  // 👆 assumes you add an `updateQty(id, qty)` function in CartContext

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, minWidth: 250 }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: 8 }}>
          <div>
            {item.name} - ${item.price}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const qty = parseInt(e.target.qty.value, 10);
              updateQty(item.id, qty);
            }}
          >
            <label>
              Qty:{" "}
              <input
                type="number"
                name="qty"
                defaultValue={item.qty}
                min="1"
                className="input input-bordered w-20"
                />

            </label>
          </form>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: 12, fontWeight: "bold" }}>
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
}
