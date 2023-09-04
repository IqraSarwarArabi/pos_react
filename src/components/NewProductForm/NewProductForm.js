import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import styles from "./NewProductForm.module.css";
import { loadProductById } from "../../api/load";
import { handleSubmit } from "../../utils/handler/add";
import FileUpload from "../FileUpload/FileUpload";

const NewProductForm = ({ edit = false, id = 0 }) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [url, setUrl] = useState(product.image);
  const [loading, setLoading] = useState(null);
  const title = edit === true ? "Edit a product" : "Add a New Product";
  const loaded = (edit === true && product.title !== "") || edit === null;
  const imgSrc = edit === true ? product.image : "../static/images/intro.svg";
  const btnValue = loading
    ? "Submitting..."
    : edit === true
    ? "Edit a Product"
    : "Add Product";

  useEffect(() => {
    if (edit) {
      loadProductById(setUrl, setProduct, id);
    }
  }, [edit, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const submitting = (event) => {
    event.preventDefault();
    handleSubmit(setLoading, setProduct, product, url, edit);
  };

  return (
    <div className={styles.container}>
      {loaded === true ? (
        <>
          <form onSubmit={submitting} className={styles.form}>
            <h1>{title}</h1>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={product.title}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleInputChange}
            />
            <Button val={btnValue} center={true} disabled={loading} />
          </form>
          <div className={styles.img} id="img">
            <FileUpload url={url} setUrl={setUrl} />
            <img src={imgSrc} id="preview" alt="intro" />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewProductForm;
