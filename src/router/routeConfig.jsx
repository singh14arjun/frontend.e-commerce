import React, { lazy } from "react";
const Home = lazy(() => import("../features/home/pages/Home"));
const Login = lazy(() => import("../features/auth/pages/Login"));
const Register = lazy(() => import("../features/auth/pages/Register"));

const CustomerDashboard = lazy(
  () => import("../features/customer/pages/CustomerDashboard"),
);

const AdminDashboard = lazy(
  () => import("../features/admin/pages/AdminDashboard"),
);

const SellerDashboard = lazy(
  () => import("../features/seller/pages/SellerDashboard"),
);

const Categories = lazy(
  () => import("../features/admin/pages/categories/Categories"),
);
export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export const customerRoutes = [
  {
    path: "dashboard",
    element: <CustomerDashboard />,
  },
];

export const adminRoutes = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "categories",
    element: <Categories />,
  },
];

export const sellerRoutes = [
  {
    path: "dashboard",
    element: <SellerDashboard />,
  },
];
