export async function addNewProduct(productData) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}
