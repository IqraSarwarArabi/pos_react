import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader, ProductDetails, NavBar, Footer } from "../../components/index";
import { loadProductById } from "../../utils/api/load";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadProductById(null, setProduct, id);
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div>
      <NavBar />
      <h1>Products Details</h1>
      <ProductDetails product={product} />
      <Footer />
    </div>
  );
};

export default Product;
