export default function SuccessPage({ searchParams }) {
  const { product, qty, customer, total } = searchParams;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Successful 🎉
      </h1>

      <div className="border p-4 rounded max-w-md space-y-3">
        <p><strong>Customer:</strong> {customer}</p>
        <p><strong>Product:</strong> {product}</p>
        <p><strong>Quantity:</strong> {qty}</p>
        <p><strong>Total Payment:</strong> ${total}</p>
      </div>
    </div>
  );
}
