import { useState } from "react";
import { BiLocationPlus, BiSearch, BiNotification } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { RiAdvertisementFill, RiArrowDropDownLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import logo from "../../assets/images/logo.png";
import Container from "../common/Container";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || null;
  console.log("Logged in user", user);

  function handleMoreDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  const dropdownList = [
    {
      icons: FaShop,
      name: "Become Seller",
      link: "",
    },
    {
      icons: BiNotification,
      name: "Notification Settings",
      link: "",
    },
    {
      icons: TfiHeadphoneAlt,
      name: "24*7 Customer Support",
      link: "",
    },
    {
      icons: RiAdvertisementFill,
      name: "Advertise",
      link: "",
    },
  ];

  return (
    <nav className="sticky top-0 z-[9999] bg-primary text-text-primary">
      {" "}
      <Container className="py-3 sm:py-4">
        {/* ================= TOP SECTION ================= */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-16 sm:w-20 md:w-24 lg:w-25">
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="ApexStore Logo"
                className="w-full cursor-pointer"
              />
            </div>

            <div className="hidden sm:flex flex-col font-bold">
              <div className="font-heading text-text-primary">ApexStore</div>

              <div className="flex items-center gap-1 text-xs sm:text-sm font-sans text-text-secondary">
                <span className="italic">Explore</span>

                <span className="flex items-center gap-1 text-text-light">
                  Plus
                  <FaBolt />
                </span>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP SEARCH ================= */}
          <div className="relative hidden md:flex flex-1 max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search products"
              className="h-10 w-full rounded-full bg-text-light px-4 pr-12 text-text-primary outline-none"
            />

            <BiSearch
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer rounded-full bg-amber-100 px-3 sm:px-4 py-1 text-sm sm:text-base"
            >
              Login
            </button>

            {/* More */}
            <div className="relative hidden sm:block">
              <button
                onClick={handleMoreDropdown}
                className="flex cursor-pointer items-center"
              >
                <span>More</span>

                <RiArrowDropDownLine
                  size={22}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-10 z-[9999] w-64 overflow-hidden rounded-md bg-primary-light text-text-primary shadow-lg">
                  {dropdownList.map((item) => {
                    const Icon = item.icons;

                    return (
                      <div
                        key={item.name}
                        className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-primary-dark"
                      >
                        <Icon size={18} />

                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative flex cursor-pointer items-center gap-1 sm:gap-2">
              <FaCartShopping size={22} />

              <p className="hidden sm:block">Cart</p>

              <span className="absolute -right-2 -top-3 flex h-5  min-w-5 items-center justify-center rounded-full bg-text-light  px-1 text-xs">
                2
              </span>
            </div>

            {/* Address - desktop */}
            <div className="hidden lg:flex cursor-pointer items-center gap-2">
              <BiLocationPlus size={20} />

              <span>Select Address</span>
            </div>
          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}
        <div className="relative mt-3 md:hidden">
          <input
            type="text"
            placeholder="Search products"
            className="h-10 w-full rounded-full bg-text-white px-4 pr-12 text-text-primary outline-none"
          />

          <BiSearch
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        {/* ================= MOBILE ADDRESS ================= */}
        <div className="mt-3 flex lg:hidden cursor-pointer items-center gap-2">
          <BiLocationPlus size={20} />

          <span className="text-sm">Select Address</span>
        </div>
      </Container>
    </nav>
  );
}
