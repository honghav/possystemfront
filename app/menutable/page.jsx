import { products } from "../../data/product";

export default function MenuPage() {
  return (
    <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
            <div className="text-center text-xl m-4">List Of Product</div>
            <hr />
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}

                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded border"
                            />
                        </td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button className="btn btn-secondary">Edit</button>
                        </td>
                    </tr>
                ))}                
                </tbody>
            </table>
        </div>
    </div>
  );
}
