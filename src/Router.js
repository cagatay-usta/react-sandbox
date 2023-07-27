import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Image from "./FetchImage";
import FakeStore from "./FakeStore";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
    {
      path: "image",
      element: <Image />
    },
    {
      path: "store",
      element: <FakeStore />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
