import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Hubo un error</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router} />;

export { CustomRouter };
