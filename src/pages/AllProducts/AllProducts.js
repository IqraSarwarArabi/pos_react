import React, { useState, useEffect } from "react";
import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import { loadAllProducts } from "../../utils/api/load";
import { debouncedSearch } from "../../utils/handler/search";
import {
  Products,
  Footer,
  Loader,
  NavBar,
  Button,
} from "../../components/index";

function AllProducts() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    loadAllProducts(setProducts);
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.products}>
        <div className={styles.header}>
          <h1>All Products</h1>
          <input
            type="text"
            placeholder="Search By Title"
            onKeyUp={(e) =>
              debouncedSearch(e.target.value, products, setFilteredProducts)
            }
          />
        </div>
        {products === null && <Loader />}
        {products !== null && filteredProducts === null && (
          <Products products={products} />
        )}
        {filteredProducts !== null && <Products products={filteredProducts} />}
        <Link to="/">
          <Button val="Back to Home" center={true} />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default AllProducts;
