import React from "react";
import styles from "./Products.module.css";
import ProductCard from "../ProductCard/ProductCard";

function Products({ products }) {
  return (
    <>
      {products !== null && (
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
