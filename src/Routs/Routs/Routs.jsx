import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Categories from "../../Pages/Categories/Categories";
import Page404 from "../../Pages/Shared/404/Page404";
import Blogs from "../../Pages/Blogs/Blogs";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyProducts from "../../Pages/Dashboard/BuyersDashboard/MyProducts/MyProducts";
import MyBuyers from "../../Pages/Dashboard/BuyersDashboard/MyBuyers/MyBuyers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:_id",
        loader:  ({params}) => fetch(`http://localhost:5000/${params._id}`),
        element: <Categories></Categories>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Page404></Page404>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/buyer/addProduct',
        element: <><AddProduct></AddProduct></>
      },
      {
        path: '/dashboard/buyer/myProducts',
        element: <><MyProducts></MyProducts></>
      },
      {
        path: '/dashboard/buyer/myBuyers',
        element: <><MyBuyers></MyBuyers></>
      },
      {
        path: '/dashboard/seller/addProduct',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/seller/myProducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/dashboard/seller/myBuyers',
        element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
      },
      // {
      //   path: '/dashboard/managedoctors',
      //   element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
      // },
      // {
      //   path: '/dashboard/payment/:id',
      //   element: <AdminRoute><Payment></Payment></AdminRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      // }
    ]
  }
]);
