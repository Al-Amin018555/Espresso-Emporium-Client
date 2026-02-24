import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import AddCoffee from "./components/AddCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import UpdateCoffee from "./components/UpdateCoffee";
import ErrorPage from "./components/ErrorPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "addCoffee",
        Component: AddCoffee
      },
      {
        path: "coffees/:id",
        loader: ({ params }) => fetch(`https://espresso-emporium-server-nb7h.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) => fetch(`https://espresso-emporium-server-nb7h.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: 'users',
        loader: () => fetch('https://espresso-emporium-server-nb7h.vercel.app/users'),
        Component: Users,
      }
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>
);
