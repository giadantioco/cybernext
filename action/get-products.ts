import { IProduct } from "@/model/product";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/`, {
    cache: "no-store",
  });
  console.log("Status:", response.status);

  if (!response.ok) {
    const error = await response.json();
    console.log("Errore api:", error);
    throw new Error("Products not found");
  }

  const data = await response.json();
  console.log("NUMERO prodotti:", data.length);
  return data;
};
