import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Categories from "../../Pages/Categories/Categories";
import Page404 from "../../Pages/Shared/404/Page404";
import Products from "../../Pages/Products/Products";
import SellerRoute from "../SellerRoute/SellerRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyBuyers from "../../Pages/Dashboard/SellerDashboard/MyBuyers/MyBuyers";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import AllSellers from "../../Pages/Dashboard/AdminDashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import ReportedItems from "../../Pages/Dashboard/AdminDashboard/ReportedItems/ReportedItems";
import MyOrders from "../../Pages/Dashboard/BuyerDashboard/MyOrders/MyOrders";
import Wishlist from "../../Pages/Dashboard/BuyerDashboard/Wishlist/Wishlist";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/SellerDashboard/MyProducts/MyProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ProductDetails from "../../Pages/Shared/ProductDetails/ProductDetails";

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
        path: "/categories/:categoriyName",
        loader: async ({ params }) => await fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/categories/${params.categoriyName}`),
        element: <Categories></Categories>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:_id",
        loader: async ({params}) => await fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/products/${params._id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "/dashboard/buyer/wishlist",
        element: (
          <BuyerRoute>
            <Wishlist></Wishlist>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/buyer/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },

      {
        path: "/dashboard/seller/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/seller/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/seller/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },

      {
        path: "/dashboard/admin/allSellrs",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/bookings/pay/:id",
        element: (
          <BuyerRoute>
            <Payment></Payment>
          </BuyerRoute>
        ),
        loader: ({ params }) => fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/dashboard/bookings/pay/${params.id}`),
      },
    ],
  },
]);