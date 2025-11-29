"use client";
import OrderHistory from "../../components/OrderHistory";

export default function OrderPage() {

  return (
    <div className="p-6">
    <h2 className="text-center text-xl">Order History</h2>
    <hr />
    <OrderHistory  />
      
    </div>
  );
}
