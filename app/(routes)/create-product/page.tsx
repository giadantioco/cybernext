"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProduct } from "@/action/create-product";
import Navbar from "@/components/navbar";
import { labels } from "@/data/labels";
import SubmitButton from "@/components/SubmitButton";

export default function CreateProduct() {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
    categoryId: 1,
    images: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newProduct = await createProduct({
        title: form.title,
        price: Number(form.price),
        description: form.description,
        categoryId: Number(form.categoryId),
        images: [form.images[0]],
      });
      alert(`Prodotto "${newProduct.title}" creato con successo!`);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Errore nella creazione del prodotto");
    }
  };

  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.titleAddform}
      </h1>

      <div className="px-16 py-4">
        <div className="bg-white border border-gray-200 p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                Title
              </label>
              <input
                name="title"
                placeholder="Product title"
                value={form.title}
                onChange={handleChange}
                required
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                Price
              </label>
              <input
                name="price"
                type="number"
                placeholder="0"
                value={form.price}
                onChange={handleChange}
                required
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Product description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                Category ID
              </label>
              <input
                name="categoryId"
                type="number"
                placeholder="1"
                value={form.categoryId}
                onChange={handleChange}
                required
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                Image URL
              </label>
              <input
                name="images"
                placeholder="https://..."
                value={form.images[0]}
                onChange={(e) => setForm({ ...form, images: [e.target.value] })}
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>

            <SubmitButton label={labels.btnAddProduct} />
          </form>
        </div>
      </div>
    </main>
  );
}
