"use client"

import { useRouter } from "next/navigation"
import { deleteProduct } from "@/action/delete-product";

export default function DeleteButton({ id }: { id: number }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Sei sicura di voler cancellare questo prodotto?")) return;

        try {
            await deleteProduct(id);
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Errore nella cancellazione");
        }
    }

    return (
        <button
            onClick={handleDelete}
            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
            Delete
        </button>

    )
}