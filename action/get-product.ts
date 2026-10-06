import { IProduct } from "@/model/product";

export const getProduct = async (id: number): Promise<IProduct | null> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};
