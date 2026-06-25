"use client";

import { labels } from "@/data/labels";
import { IProduct } from "@/model/product";
import Link from "next/link";

function Button({ product }: { product: IProduct }) {
  return (
    <Link
      href={`/product-detail/${product.id}`}
      className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
    >
      {labels.btnView}
    </Link>
  );
}

export default Button;
