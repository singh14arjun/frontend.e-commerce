import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import {
  publicRoutes,
  customerRoutes,
  adminRoutes,
  sellerRoutes,
} from "./routeConfig";

import PageLoader from "../components/common/PageLoader";

const CustomerLayout = lazy(() => import("../layouts/CustomerLayout"));

const AdminLayout = lazy(() => import("../layouts/AdminLayout"));

const SellerLayout = lazy(() => import("../layouts/SellerLayout"));

const NoPageFound = lazy(() => import("../components/common/NoPageFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ================= PUBLIC / CUSTOMER ================= */}

        <Route path="/" element={<CustomerLayout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path === "/" ? undefined : route.path}
              index={route.path === "/"}
              element={route.element}
            />
          ))}
        </Route>

        {/* ================= CUSTOMER PROTECTED ================= */}

        <Route element={<ProtectedRoute />}>
          <Route path="/customer">
            {customerRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>

        {/* ================= ADMIN ================= */}

        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              {adminRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Route>
        </Route>

        {/* ================= SELLER ================= */}

        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={["SELLER"]} />}>
            <Route path="/seller" element={<SellerLayout />}>
              {sellerRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Route>
        </Route>

        {/* ================= 404 ================= */}

        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Suspense>
  );
}
