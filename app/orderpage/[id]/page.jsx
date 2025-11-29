"use client";

import { useState, use } from "react";
import { products } from "../../../data/product";
import { useRouter } from "next/navigation";

export default function OrderPage({ params }) {
  const router = useRouter();

  // ⛔ FIX: params is now a Promise → MUST unwrap it using use()
  const { id } = use(params);
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  const [qty, setQty] = useState(1);
  const [customer, setCustomer] = useState("");

  if (!product) {
    return <div className="p-6 text-red-500 text-xl">Product not found</div>;
  }

  const placeOrder = () => {
    router.push(
      `/orderpage/success?product=${product.name}&qty=${qty}&customer=${customer}&total=${qty * product.price}`
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order {product.name}</h1>

      <div className="max-w-md space-y-4 border p-4 rounded">
        <div>
          <label className="block font-medium">Customer Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            min={1}
            className="border p-2 w-full rounded"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>

        <div className="text-lg">
          <strong>Total:</strong> ${qty * product.price}
        </div>

        <button
          onClick={placeOrder}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
