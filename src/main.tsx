import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/users.tsx";
import User from "./pages/user.tsx";
import CreateUser from "./pages/createUser.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children : [
      {
        path : "",
        Component : Users
      },
      {
        path : "/users/:userId",
        Component : User
      },
      {
        path : "/users/create",
        Component : CreateUser
      }
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}/>
);
