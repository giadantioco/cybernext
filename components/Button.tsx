"use client";

import { labels } from "@/data/labels";
import { IProduct } from "@/model/product";

function Button({ product }: { product: IProduct }) {
  return (
    <button
      onClick={() => console.log(product.title)}
      className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
    >
      {labels.btnView}
    </button>
  );
}

export default Button;
