import { getProduct } from "@/action/get-product";
import Navbar from "@/components/navbar";
import Link from "next/link";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = await getProduct(Number(params.id));

  return (
    <main>
      <Navbar />

      <section className="px-16 py-8">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <Link
          href={`/edit-product/${product.id}`}
          className="inline-block mt-4 bg-petrol text-white font-syne font-bold py-2 px-6 hover:opacity-90 transition-opacity"
        >
          Edit Product
        </Link>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-102 w-full object-cover"
          />

          <div>
            <p className="text-lg">{product.description}</p>
            <p className="mt-4 text-2xl font-bold">{product.price} €</p>
            <p className="mt-2 text-gray-600">{product.category.name}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
