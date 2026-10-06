import { IProduct } from "@/model/product";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Products not found");
  }

  const data = await response.json();
  return data;
};
