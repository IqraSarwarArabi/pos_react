import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className={styles.link}>
    <div className={styles.card}>
      <img alt="testAlt" src={product.image} className={styles.image} />
      <div className={styles.body}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.desc}>{product.description}</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.footer}>
        <p>$ {product.price}</p>
        <p>{product.rating.rate} / 5</p>
        <p>{product.category}</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
