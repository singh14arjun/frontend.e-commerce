import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../features/admin/components/AdminNavbar";
import AdminSidebar from "../features/admin/components/AdminSidebar";
import Footer from "../components/layout/Footer";

export default function AdminLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <aside className="fixed left-0 top-0 h-screen w-64">
        <AdminSidebar />
      </aside>

      <div className="ml-64 h-screen flex flex-col">
        <header className="sticky top-0 z-50 h-16 shrink-0">
          <AdminNavbar />
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />

          <Footer />
        </main>
      </div>
    </div>
  );
}
