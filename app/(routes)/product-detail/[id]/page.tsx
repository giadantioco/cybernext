import { getProduct } from "@/action/get-product";
import Header from "@/components/Header";
import ProductActions from "@/components/ProductActions";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";

export async function generateMetadata(
  props: ProductDetailPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(Number(params.id));
  return { title: product?.title ?? "Product not found" };
}

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
      <section className="px-4 py-8 md:px-16">
        <article className="mx-auto w-full max-w-4xl bg-white border border-gray-200 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <ProductImage
            src={product.images[0]}
            alt={product.title}
            className="w-full h-64 md:h-full object-cover"
          />

          <div className="p-6 md:p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {product.category.name}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <p className="text-2xl font-bold text-petrol">{product.price} €</p>
            <p className="text-gray-600">{product.description}</p>

            <div className="mt-auto pt-4">
              <ProductActions
                id={product.id}
                showView={false}
                redirectTo={"/"}
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
