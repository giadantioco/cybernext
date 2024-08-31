import { getProduct } from "@/action/get-product";
import { getProducts } from "@/action/get-products";
import { labels } from "../data/labels";
import Button from "@/components/Button";

import Navbar from "@/components/navbar";

export default async function HomePage() {
  const product = await getProduct();
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.productList}
      </h1>
      <div className="overflow-x-auto px-16">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-left">
                {labels.tableImg}
              </th>
              <th className="px-4 py-2 border-b text-left">{labels.tableId}</th>
              <th className="px-4 py-2 border-b text-left">
                {labels.tableTitle}
              </th>
              <th className="px-4 py-2 border-b text-left">
                {labels.tableCategory}
              </th>
              <th className="px-4 py-2 border-b text-left">
                {labels.tablePrice}
              </th>
              <th className="px-4 py-2 border-b text-left">
                {labels.tableAction}
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border-b">{product.id}</td>
                <td className="px-4 py-2 border-b">{product.title}</td>
                <td className="px-4 py-2 border-b">{product.category.name}</td>
                <td className="px-4 py-2 border-b">{product.price} €</td>
                <td className="px-4 py-2 border-b">
                  <Button product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
