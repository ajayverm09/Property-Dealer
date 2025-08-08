import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="bg-white shadow-md py-4">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center space-x-6">
      <img
        className="h-24 w-24"
        src="https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg"
        alt="LOGO"
      />
      <div>
        <h1 className="text-2xl font-semibold text-orange-600">Deal Acres</h1>
        <h2 className="text-3xl font-bold text-blue-600">Manchanda Realtors Pvt Ltd</h2>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-around gap-4 mt-6 text-black text-sm md:text-base font-medium">
      <Link to="/">Home</Link>
      <div className="relative group">
        <Link to="/about" className="cursor-pointer">About Us</Link>
        <ul className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/about/team">Our Team</Link>
        </li>
        </ul>
      </div>
      

      <div className="relative group">
        <Link to="/residential" className="cursor-pointer">Residential</Link>
        <ul className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
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
            <Link to="/residential/Independent-House">Independent House</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/residential/Farm Houses">Farm Houses</Link>
          </li>
        </ul>
      </div>

      <div className="relative group">
        <Link to="/commercial" className="cursor-pointer">Commercial</Link>
        <ul className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
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
            <Link to="/commercial/independent-building">Independent Building</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/commercial/institutional-plots">Institutional Plots</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/commercial/industrial-land">Industrial Plots / Land</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/commercial/warehouse">Warehouse</Link>
          </li>
        </ul>
      </div>

      <div className="relative group">
        <Link to="/pre-leased" className="cursor-pointer">Preleased</Link>
        <ul className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
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
            <Link to="/pre-leased/independent-building">Independent Building</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/pre-leased/institutional-plots">Institutional Plots</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-300 text-sm">
            <Link to="/pre-leased/industrial-land">Industrial Plots / Land</Link>
          </li>
        </ul>
      </div>

      <Link to="/gurugram">Gurugram Map</Link>
      <Link to="/blog">Blogs</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>
</header>

    </div>
  );
}

export default Navbar;
