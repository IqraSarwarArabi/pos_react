export async function editProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/7", {
      method: "PUT",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
}
