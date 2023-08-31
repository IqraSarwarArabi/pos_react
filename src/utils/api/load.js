export function loadAllProducts(setProducts) {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

export function loadLimitedProducts(setProducts, limit) {
  fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

export function loadProductById(setUrl, setProduct, id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (setUrl) setUrl(json.image);
      setProduct(json);
    })
    .catch((error) => console.error("Error fetching product:", error));
}
