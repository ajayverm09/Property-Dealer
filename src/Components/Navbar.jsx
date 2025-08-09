import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menu) =>
    setDropdownOpen(dropdownOpen === menu ? null : menu);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16"
            src="https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg"
            alt="LOGO"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-orange-600">
              Deal Acres
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              Manchanda Realtors Pvt Ltd
            </h2>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block bg-white border-t md:border-none`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 px-4 py-4 md:py-0 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left md:w-auto"
            >
              About Us
            </button>
            <ul
              className={`absolute md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-52 bg-white border shadow-md transition-all duration-200 ${
                dropdownOpen === "about"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 md:opacity-0 md:invisible md:translate-y-2"
              }`}
            >
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/about/team">Our Team</Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button
              onClick={() => toggleDropdown("residential")}
              className="w-full text-left md:w-auto"
            >
              Residential
            </button>
            <ul
              className={`absolute md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-52 bg-white border shadow-md transition-all duration-200 ${
                dropdownOpen === "residential"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 md:opacity-0 md:invisible md:translate-y-2"
              }`}
            >
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Fresh-Booking">Fresh Booking</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Apartments">Apartments</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Builder floor">Builder Floor</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Plots">Plots</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Independent-House">
                  Independent House
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/residential/Farm Houses">Farm Houses</Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button
              onClick={() => toggleDropdown("commercial")}
              className="w-full text-left md:w-auto"
            >
              Commercial
            </button>
            <ul
              className={`absolute md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-52 bg-white border shadow-md transition-all duration-200 ${
                dropdownOpen === "commercial"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 md:opacity-0 md:invisible md:translate-y-2"
              }`}
            >
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/fresh-booking">Fresh Booking</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/rent">Office Space for Rent</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/sale">Office Space for Sale</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/retail">Retail</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/independent-building">
                  Independent Building
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/institutional-plots">
                  Institutional Plots
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/industrial-land">
                  Industrial Plots / Land
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/commercial/warehouse">Warehouse</Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button
              onClick={() => toggleDropdown("preleased")}
              className="w-full text-left md:w-auto"
            >
              Preleased
            </button>
            <ul
              className={`absolute md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-52 bg-white border shadow-md transition-all duration-200 ${
                dropdownOpen === "preleased"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 md:opacity-0 md:invisible md:translate-y-2"
              }`}
            >
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/fresh-booking">Fresh Booking</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/rent">Office Space for Rent</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/sale">Office Space for Sale</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/retail">Retail</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/independent-building">
                  Independent Building
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/institutional-plots">
                  Institutional Plots
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 text-sm">
                <Link to="/pre-leased/industrial-land">
                  Industrial Plots / Land
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/gurugram">Gurugram Map</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
