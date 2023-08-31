import swal from "sweetalert";
import { deleteProduct } from "../api/delete";

export const handleDelete = (setDeleting, product) => {
  swal({
    title: "Delete Product?",
    text: `Do you really want to delete this product?`,
    icon: "warning",
  }).then(async () => {
    try {
      setDeleting(true);
      const response = await deleteProduct(product.id);
      swal({
        title: "Product Deleted!",
        text: `Product id = ${response.id}`,
        icon: "success",
      }).then(() => {
        window.location.href = "/";
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
      setDeleting(false);
    }
  });
};
