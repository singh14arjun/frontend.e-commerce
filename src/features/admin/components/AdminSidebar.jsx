import { NavLink } from "react-router-dom";
import { FaStore, FaUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";
import { GiDivergence } from "react-icons/gi";
import { TbBrandSocketIo } from "react-icons/tb";
import { FiSettings, FiTruck } from "react-icons/fi";
import { BsCashStack, BsGraphUp } from "react-icons/bs";
import { MdOutlineStore } from "react-icons/md";
export default function AdminSidebar() {
  const navLinks = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      name: "Seller",
      link: "/admin/seller",
      icon: <FaStore />,
    },
    {
      name: "Users & Customers",
      link: "/admin/users",
      icon: <FaUser />,
    },

    {
      subTitle: "Catalog",
    },

    {
      name: "Categories",
      link: "/admin/categories",
      icon: <BiCategoryAlt />,
    },
    {
      name: "Sub Categories",
      link: "/admin/sub-categories",
      icon: <GiDivergence />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <TbBrandSocketIo />,
    },

    {
      subTitle: "Operations",
    },

    {
      name: "Products",
      link: "/admin/products",
      icon: <MdOutlineStore />,
    },
    {
      name: "Orders & Logistics",
      link: "/admin/orders",
      icon: <FiTruck />,
    },
    {
      name: "Finance & Payments",
      link: "/admin/finance",
      icon: <BsCashStack />,
    },
    {
      name: "Reports & Analytics",
      link: "/admin/reports",
      icon: <BsGraphUp />,
    },
    {
      name: "Settings",
      link: "/admin/settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="h-full w-64 overflow-y-auto border-r border-primary bg-primary-light p-4">
      <h2 className="text-lg font-bold text-text-primary">Admin Panel</h2>

      <nav className="mt-6 flex flex-col gap-2">
        {navLinks.map((item, index) => {
          if (item.subTitle) {
            return (
              <p
                key={index}
                className="mt-4 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                {item.subTitle}
              </p>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md p-2 text-sm font-medium transition duration-300
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-primary hover:bg-text-light hover:text-primary"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
