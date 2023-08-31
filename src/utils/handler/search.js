import { debounce } from "lodash";

export const handleSearch = (value, products, setProducts) => {
  if (products === null) return;
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );

  setProducts(filteredProducts);
};

export const debouncedSearch = debounce(handleSearch, 300);
