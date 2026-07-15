import { getProducts } from "@/action/get-products";
import { labels } from "../data/labels";
import Navbar from "@/components/navbar";
import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";

export default async function HomePage() {
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.productList}
      </h1>
      <div className="overflow-x-auto px-16">
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
                  <div className="flex gap-2">
                    <Button
                      label={labels.btnView}
                      href={`/product-detail/${product.id}`}
                      variant="view"
                    />
                    <Button
                      label={labels.btnEdit}
                      href={`/edit-product/${product.id}`}
                      variant="edit"
                    />
                    <DeleteButton id={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
