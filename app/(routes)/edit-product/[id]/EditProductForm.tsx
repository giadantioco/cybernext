"use client";

import { updateProduct } from "@/action/update-product";
import { IProduct } from "@/model/product";
import { useRouter } from "next/navigation";
import { labels } from "@/data/labels";
import { useState } from "react";

export default function EditProductForm({ product }: { product: IProduct }) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    categoryId: product.category.id,
    images: product.images,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "images" ? [value] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProduct(product.id, {
        title: form.title,
        price: Number(form.price),
        description: form.description,
        categoryId: Number(form.categoryId),
        images: form.images
      });
      router.push("/");
      router.refresh()
    } catch (error) {
      console.error(error)
      alert("Errore nella modifica del prodotto");
    }
  }

  return (
    <div className="px-16 py-4">
      <div className="bg-white border border-gray-200 p-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
              className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400 resize-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Category ID</label>
            <input
              name="categoryId"
              type="number"
              value={form.categoryId}
              onChange={handleChange}
              required
              className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Image URL</label>
            <input
              name="images"
              type="url"
              value={form.images[0]}
              onChange={handleChange}
              className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-petrol text-white font-syne font-bold py-2 px-6 hover:opacity-90 transition-opacity mt-2"
          >
            {labels.btnSaveEdit}
          </button>

        </form>
      </div>
    </div>
  );
}
