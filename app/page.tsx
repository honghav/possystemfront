import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import OrderForm from "../components/OrderForm";
import OrderHistory from "../components/OrderHistory";
import {products} from "../data/product";


export default function Home() {
  return (
    <div className="">
       <h1 className="text-center text-xl m-4 ">Order Page</h1>
      <hr/>
      <div className="m-2"></div>
    <div style={{ display: "flex", gap: 20, padding: 20, alignItems: "flex-start" }}>
     
      {/* Left column: Product list */}
      <div style={{ flex: 2 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Right column: Cart + Order */}
      <div style={{ flex: 1 }}>
        <Cart />
        <OrderForm />
        {/* <OrderHistory/> */}
      </div>
    </div>
    </div>
  );
}
