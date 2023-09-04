export async function deleteProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
