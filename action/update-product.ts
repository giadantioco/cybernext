import { IProduct } from "@/model/product";

export const updateProduct = async (
  id: number,
  product: {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  },
): Promise<IProduct> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(product),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    console.log("API error:", error);
    throw new Error("Product not updated");
  }
  return response.json();
};
