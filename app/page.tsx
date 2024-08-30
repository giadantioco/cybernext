import Navbar from "@/components/navbar";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

const getPrducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/1");

    const data: Promise<IProduct> = await response.json();

    return data;
  } catch (e: any) {
    throw Error(e.message);
  }
};

export default async function HomePage() {
  const product = await getPrducts();
  console.log(product);

  return (
    <main>
      <Navbar></Navbar>
      <h1>Ciao Sono la home</h1>
    </main>
  );
}
