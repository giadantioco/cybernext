"use client";

import { IProduct } from "@/model/product";
import { useRouter } from "next/router";
import { title } from "process";
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
    });
  };

  return <div></div>;
}
