import { getProducts } from "@/action/get-products";
import { labels } from "../data/labels";
import Navbar from "@/components/navbar";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.productList}
      </h1>
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto px-16">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="table-th">{labels.tableImg}</th>
              <th className="table-th">{labels.tableId}</th>
              <th className="table-th">{labels.tableTitle}</th>
              <th className="table-th">{labels.tableCategory}</th>
              <th className="table-th">{labels.tablePrice}</th>
              <th className="table-th">{labels.tableAction}</th>
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
                <td className="table-td">{product.id}</td>
                <td className="table-td">{product.title}</td>
                <td className="table-td">{product.category.name}</td>
                <td className="table-td">{product.price} €</td>
                <td className="table-td">
                  <ProductActions id={product.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
