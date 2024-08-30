import { getProduct } from "@/action/get-product";
import { getProducts } from "@/action/get-products";
import Navbar from "@/components/navbar";

export default async function HomePage() {
  const product = await getProduct();
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <Navbar></Navbar>
      <h1>
        Ciao, dovrei renderizzare il tutolo del prodotto {product.id}:{" "}
        {product.title}
      </h1>
      {/* <img src={product.image} alt="" /> NON VA!! */}
      {products.map((product) => {
        return (
          <li key={product.id}>
            {" "}
            id: {product.id} title: {product.title}
          </li>
        );
      })}
    </main>
  );
}
