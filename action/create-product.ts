import { IProduct } from "@/model/product";

export const createProduct = async (product: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}): Promise<IProduct> => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    const error = await response.json();
    console.log("API error:", error); // ← così vedi esattamente cosa dice l'API
    throw new Error("Product not created");
  }

  return response.json();
};
