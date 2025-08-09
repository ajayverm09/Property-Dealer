import React from "react";
import Emaar from "../Images/1st.png";
import sector from "../Images/3rd.png";
import gurugram from "../Images/2nd.png";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import LogoSlider from "./LogoSlider";
import Commercial from "./Commercial";
import Residential from "./Residential";
import PreLeased from "./PreLeased";
import Trending from "./Trending";
import InquiryForm from "./Inquiry";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <InquiryForm />

      <section
        className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
      >
        <Slider className="overflow-hidden" />
      </section>

      <Trending />

      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl text-center mx-auto">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Search Properties</h2>
        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3">
          <select className="border hover:bg-black hover:text-white rounded-md p-2 w-full sm:w-48">
            <option>Select Property Type</option>
          </select>
          <select className="border hover:bg-black hover:text-white rounded-md p-2 w-full sm:w-48">
            <option>Select Type</option>
          </select>
          <select className="border hover:bg-black hover:text-white rounded-md p-2 w-full sm:w-48">
            <option>Select Cities</option>
          </select>
          <select className="border hover:bg-black hover:text-white rounded-md p-2 w-full sm:w-48">
            <option>Select Offer</option>
          </select>
          <button className="text-black px-4 py-2 rounded hover:bg-blue-700 hover:text-white w-full sm:w-auto">
            Search
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-12 gap-3">
          <button
            onClick={() => {
              document.getElementById("residential").scrollIntoView({ behavior: "smooth" });
            }}
            className="border hover:bg-blue-800 hover:text-white rounded-md p-2 w-full sm:w-48"
          >
            Residential Properties
          </button>
          <button
            onClick={() => {
              document.getElementById("commercial").scrollIntoView({ behavior: "smooth" });
            }}
            className="border hover:bg-blue-800 hover:text-white rounded-md p-2 w-full sm:w-48"
          >
            Commercial Properties
          </button>
          <button
            onClick={() => {
              document.getElementById("preleased").scrollIntoView({ behavior: "smooth" });
            }}
            className="border hover:bg-blue-800 hover:text-white rounded-md p-2 w-full sm:w-48"
          >
            PreLeased Properties
          </button>
          <button
            onClick={() => navigate("/industrial")}
            className="border hover:bg-blue-800 hover:text-white rounded-md p-2 w-full sm:w-48"
          >
            Industrial Plots
          </button>
          <button
            onClick={() => navigate("/gurugram")}
            className="border hover:bg-blue-800 hover:text-white rounded-md p-2 w-full sm:w-48"
          >
            Gurugram Circle Rate
          </button>
        </div>
      </section>

      <section id="residential" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Residential Properties</h2>
        <Residential />
      </section>

      <section id="commercial" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Commercial Properties</h2>
        <Commercial />
      </section>

      <section id="preleased" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">Pre Leased Properties</h2>
        <PreLeased />
      </section>

      <Testimonials />
      <LogoSlider />

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">From Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <img src={Emaar} alt="Emaar Urban" className="w-full h-40 object-cover rounded" />
            <p className="mt-3 text-sm md:text-base text-justify">
              Emaar Urban Ascent in Sector 112, Gurugram, is an ultra-modern residential project by Emaar India. Designed to offer a premium lifestyle, it features spacious apartments with contemporary architecture, excellent ventilation, and top-tier finishes. The project is strategically located near Dwarka Expressway, making connectivity to Delhi and major business hubs seamless. Residents benefit from world-class amenities including a clubhouse, swimming pool, landscaped gardens, gymnasium, and 24/7 security.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-800 text-white w-full py-2 rounded">
              Read More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src={gurugram} alt="Gurugram" className="w-full h-40 object-cover rounded" />
            <p className="mt-3 text-sm md:text-base text-justify">
              Gurugram, formerly Gurgaon, is one of India’s fastest-growing real estate markets, offering residential, commercial, and industrial opportunities. Its proximity to Delhi, rapid urbanization, and corporate expansion make it a hub for premium real estate developments. Areas like Golf Course Road, Dwarka Expressway, and Sohna Road are especially in demand due to excellent infrastructure and connectivity.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-800 text-white w-full py-2 rounded">
              Read More
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src={sector} alt="Sector 93" className="w-full h-40 object-cover rounded" />
            <p className="mt-3 text-sm md:text-base text-justify">
              Sector 93 in Gurugram is emerging as a sought-after residential locality thanks to its strategic location, serene environment, and ongoing infrastructure development. Positioned near Pataudi Road and Dwarka Expressway, it enjoys excellent connectivity to major parts of Gurugram and Delhi. The area offers a mix of mid-range and premium housing projects.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-800 text-white w-full py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
