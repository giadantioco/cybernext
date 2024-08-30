import { IProduct } from "@/model/product";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    const data = await response.json();

    return data;
  } catch (e: any) {
    throw Error(e.message);
  }
};
