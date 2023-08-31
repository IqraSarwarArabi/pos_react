import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { handleDelete } from "../../utils/handler/delete";

const ProductDetails = ({ product }) => {
  const [deleting, setDeleting] = useState(false);

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.detailsContainer}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <table className={styles.productTable}>
          <tbody>
            <tr>
              <td>Price:</td>
              <td>${product.price}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td>
                {product.rating.rate} ({product.rating.count} reviews)
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={{ pathname: "/new" }} state={{ edit: true, id: product.id }}>
          <Button val="Edit" center={true} />
        </Link>
        <Button
          val={deleting ? "Deleting..." : "Delete"}
          center={true}
          onClick={() => handleDelete(setDeleting, product)}
          disabled={deleting}
        />{" "}
      </div>
    </div>
  );
};

export default ProductDetails;
