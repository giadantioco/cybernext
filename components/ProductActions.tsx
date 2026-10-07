import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";
import { labels } from "@/data/labels";

export default function ProductActions({ id }: { id: number }) {
  return (
    <div className="flex gap-2">
      <Button
        label={labels.btnView}
        href={`/product-detail/${id}`}
        variant="view"
      />
      <Button
        label={labels.btnEdit}
        href={`/edit-product/${id}`}
        variant="edit"
      />
      <DeleteButton id={id} />
    </div>
  );
}
