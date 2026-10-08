import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";
import { labels } from "@/data/labels";

interface ProductActionProps {
  id: number;
  showView?: boolean;
  redirectTo?: string;
}

export default function ProductActions({
  id,
  showView = true,
  redirectTo,
}: ProductActionProps) {
  return (
    <div className="flex gap-2">
      {showView && (
        <Button
          label={labels.btnView}
          href={`/product-detail/${id}`}
          variant="view"
        />
      )}

      <Button
        label={labels.btnEdit}
        href={`/edit-product/${id}`}
        variant="edit"
      />
      <DeleteButton id={id} redirectTo={redirectTo} />
    </div>
  );
}
