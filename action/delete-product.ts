export const deleteProduct = async (id: number): Promise<void> => {
    const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        throw new Error("Product not deleted");
    }
}