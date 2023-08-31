import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product, NewProduct, AllProducts, Home } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allProducts",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/new",
    element: <NewProduct />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
