import { getProduct } from "@/action/get-product";
import Header from "@/components/Header";
import { labels } from "@/data/labels";
import EditProductForm from "./EditProductForm";
import { notFound } from "next/navigation";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage(props: EditProductPageProps) {
  const params = await props.params;
  const product = await getProduct(Number(params.id));
  if (!product) notFound();
  return (
    <main>
      <Header />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.titleEditform}
      </h1>
      <EditProductForm product={product} />
    </main>
  );
}
