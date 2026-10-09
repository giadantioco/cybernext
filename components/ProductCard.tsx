import { IProduct } from "@/model/product";
import ProductActions from "./ProductActions";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div>
      <article className="bg-white border-gray-200 border rounded-2xl">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover border rounded-2xl"
        />
        <div className="p-4 flex flex-col gap-2">
          <p className="text-xs text-gray-500">{product.category.name}</p>
          <h2 className="font-bold">{product.title}</h2>
          <p className="text-lg font-bold">{product.price} €</p>
          <ProductActions id={product.id} />
        </div>
      </article>
    </div>
  );
}
