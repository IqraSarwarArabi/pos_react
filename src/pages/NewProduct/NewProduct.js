import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar, Footer, NewProductForm } from "../../components/index";

function NewProduct() {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <NavBar />
      <NewProductForm edit={state && state.edit} id={state && state.id} />
      <Footer />
    </div>
  );
}

export default NewProduct;
