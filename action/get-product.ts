import { IProduct } from "@/model/product";

export const getProduct = async (id: number): Promise<IProduct> => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
  );

  console.log("Status:", response.status); // ← vedi il codice di risposta
  console.log("ID richiesto:", id); // ← vedi quale id stai cercando
  if (!response.ok) {
    const error = await response.json();
    console.log("Errore API:", error);
  }

  const data = await response.json();
  console.log("prodotto:", data);
  return data;
};
