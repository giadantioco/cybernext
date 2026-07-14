import { getProduct } from "@/action/get-product";
import Navbar from "@/components/navbar";
import { labels } from "@/data/labels";

type EditProductPageProps = {
  params: {
    id: string;
  };
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const product = await getProduct(Number(params.id));
  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font bold text-center py-8">{labels.navEdit}</h1>
    </main>
  );
}
