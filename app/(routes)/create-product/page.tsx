"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProduct } from "@/action/create-product";
import Header from "@/components/Header";
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
      alert(labels.msgCreateSuccess(newProduct.title));
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert(labels.msgCreateError);
    }
  };

  return (
    <main>
      <Header />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.titleAddform}
      </h1>

      <div className="px-16 py-4">
        <div className="bg-white border rounded-2xl border-gray-200 p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.formLabelTitle}
              </label>
              <input
                name="title"
                placeholder={labels.formPlaceholderTitle}
                value={form.title}
                onChange={handleChange}
                required
                className="border rounded-2xl border-gray-200 px-4 py-2 focus:outline-hidden focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.formLabelPrice}
              </label>
              <input
                name="price"
                type="number"
                placeholder="0"
                value={form.price}
                onChange={handleChange}
                required
                className="border rounded-2xl border-gray-200 px-4 py-2 focus:outline-hidden focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.formLabelDescription}
              </label>
              <textarea
                name="description"
                placeholder={labels.formPlaceholderDescription}
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="border rounded-2xl border-gray-200 px-4 py-2 focus:outline-hidden focus:border-gray-400 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.formLabelCategoryId}
              </label>
              <input
                name="categoryId"
                type="number"
                placeholder="1"
                value={form.categoryId}
                onChange={handleChange}
                required
                className="border rounded-2xl border-gray-200 px-4 py-2 focus:outline-hidden focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.formLabelImage}
              </label>
              <input
                name="images"
                placeholder={labels.formPlaceholderImage}
                value={form.images[0]}
                onChange={(e) => setForm({ ...form, images: [e.target.value] })}
                className="border rounded-2xl border-gray-200 px-4 py-2 focus:outline-hidden focus:border-gray-400"
              />
            </div>

            <SubmitButton label={labels.btnAddProduct} />
          </form>
        </div>
      </div>
    </main>
  );
}
