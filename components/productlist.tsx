"use client";

import { FC } from "react";
import Link from "next/link";
import { Product } from "../types";
import { labels } from "../data/labels";

interface ProductListProps {
  productList: Product[];
  filter: string;
  isLoading: boolean;
  onDelete: (id: string) => void;
}

const ProductList: FC<ProductListProps> = ({
  productList,
  filter,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm font-syne">
        <thead className="text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {labels.productTableItem}
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {labels.productTableEmpty}
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {labels.productTableCategory}
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {labels.productTableQuantity}
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {labels.productTableIsbn}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {" "}
          {productList
            .filter((product) =>
              product.item.toLowerCase().includes(filter.toLowerCase())
            )
            .map((product) => (
              <tr key={product.id}>
                <td className="whitespace-nowrap px-4 py-2 font-large text-gray-900">
                  <img
                    src={product.image}
                    alt={product.item}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {product.item}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                  {product.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                  {product.quantity}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                  {product.isbn}
                </td>
                <td className="whitespace-nowrap px-4 py-2 flex gap-2">
                  {/* <Link
                    href={`/edit/${product.id}`}
                    className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                  >
                    {labels.productTableBtnEdit}
                    <i className="fa-solid fa-pen ml-2"></i>
                  </Link>

                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    {labels.productTableBtnView}
                    <i className="fa-solid fa-eye ml-2"></i>
                  </Link>

                  <button
                    onClick={() => onDelete(product.id)}
                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    {labels.productTableBtnDelete}
                    <i className="fa-solid fa-trash-can ml-2"></i>
                  </button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
