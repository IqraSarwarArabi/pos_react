import swal from "sweetalert";
import { addNewProduct } from "../api/add";
import { validate } from "../validations";
import { editProduct } from "../api/edit";

export const handleSubmit = async (
  setLoading,
  setProduct,
  product,
  url,
  edit
) => {
  const successAlert = edit === true ? "Product Edited!" : "Product Added!";
  product.image = url;
  let error = validate(product);
  if (error !== "") {
    swal({
      title: "Validation Error!",
      text: error,
      icon: "error",
    });
    return;
  }
  setLoading(true);
  try {
    const response =
      edit === true ? await editProduct(product) : await addNewProduct(product);
    swal({
      title: successAlert,
      text: `Product id = ${response.id}`,
      icon: "success",
    }).then(() => {
      window.location.href = "/";
      setProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    });
  } catch (error) {
    swal({
      title: "Operation Failed!",
      text: error,
      icon: "error",
    }).then(() => {
      window.location.href = "/new";
    });
  } finally {
    setLoading(false);
  }
};
