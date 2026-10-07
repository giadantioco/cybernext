"use client";

import { useRouter } from "next/navigation";
import { deleteProduct } from "@/action/delete-product";
import { labels } from "@/data/labels";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(labels.msgDeleteConfirm)) return;

    try {
      await deleteProduct(id);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert(labels.msgDeleteError);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="inline-block rounded-sm bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
    >
      {labels.btnDelete}
    </button>
  );
}
