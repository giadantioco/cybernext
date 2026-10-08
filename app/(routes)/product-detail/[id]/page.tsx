import { getProduct } from "@/action/get-product";
import Header from "@/components/Header";
import ProductActions from "@/components/ProductActions";
import { labels } from "@/data/labels";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage(props: ProductDetailPageProps) {
  const params = await props.params;
  const product = await getProduct(Number(params.id));
  if (!product) notFound();
  return (
    <>
      <Header />
      <section className="px-16 py-8">
        <h1 className="text-4xl font-bold pb-4">{product.title}</h1>
        <ProductActions id={product.id} showView={false} redirectTo={"/"} />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full aspect-square object-cover border rounded-2xl"
          />
          <div>
            <p className="text-lg">{product.description}</p>
            <p className="mt-4 text-2xl font-bold">{product.price} €</p>
            <p className="mt-2 text-gray-600">{product.category.name}</p>
          </div>
        </div>
      </section>
    </>
  );
}
