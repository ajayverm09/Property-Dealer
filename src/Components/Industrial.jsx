import React from "react";

function Industrial() {
  const properties = [
    {
      id: 1,
      title: "Agricultural Land For Sale in Sultanpur",
      price: "4 Cr.",
      type: "Industrial Land",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-14-at-4.20.10-PM-120x75.jpeg 120w"
    },
    {
      id: 2,
      title: "Industrial Land For Sale Sector 35 Gurgaon",
      price: "50 Cr.",
      type: "Industrial Plot",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-14-at-5.22.52-PM-1-848x530.jpeg",
    },
    {
      id: 3,
      title: "Land For Sale In Industrial Zone Sector 35,Gurgaon",
      price: "50 Cr.",
      type: "Industrial Plot",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-14-at-5.24.56-PM-848x530.jpeg",
    },
    {
      id: 4,
      title: "Land For Sale In Industrial Zone Sector 35,Gurgaon",
      price: "50 Cr.",
      type: "Industrial Plot",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-14-at-5.24.20-PM-848x530.jpeg",
    },
    {
      id: 5,
      title: "Industrial Land For Sale In Sector 35 Gurgaon",
      price: "50 Cr.",
      type: "Industrial Plot",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-14-at-5.23.40-PM-848x530.jpeg",
    },
    {
      id: 6,
      title: "IIMT Manesar Industrial Plot Sector 8, Gurgaon",
      price: "50 Cr.",
      type: "Industrial Plot",
      img: "https://manchandarealtors.com/wp-content/uploads/2024/11/Sector-8-IMT-Pic-600x375.jpg",
    },
  ];

  return (
    <div>
      
      <div className="relative w-full h-36 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://manchandarealtors.com/wp-content/uploads/2021/06/industrial-1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <p className="relative text-white text-3xl z-10">Contact Us</p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-6">
        
        <aside className="w-full lg:w-1/4 space-y-4">
          <div>
            <label className="block font-semibold mb-1">CITY</label>
            <select className="w-full border px-3 py-2">
              <option>City</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">STREET</label>
            <select className="w-full border px-3 py-2">
              <option>Street</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">OFFER TYPE</label>
            <select className="w-full border px-3 py-2">
              <option>Offer Type</option>
            </select>
          </div>
          <button className="text-blue-600 underline mt-2">CLEAR</button>
        </aside>

    
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 text-sm">
              <span className="font-semibold">Sort by:</span>
              <button className="hover:text-blue-600">NEWEST</button>
              <button className="hover:text-blue-600">POPULAR</button>
              <button className="hover:text-blue-600">PRICE (HIGH TO LOW)</button>
              <button className="hover:text-blue-600">PRICE (LOW TO HIGH)</button>
            </div>
            <button className="bg-blue-700 text-white px-3 py-1 text-sm rounded hover:bg-blue-800">
               SEARCH
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((item) => (
              <div key={item.id} className="bg-white rounded shadow overflow-hidden">
                <div className="relative">
                  <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    FOR SALE
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-blue-700 mt-1 font-semibold">{item.price}</p>
                  <p className="text-sm text-gray-600 mt-1">Type: {item.type}</p>
                  <div className="mt-3 flex justify-between text-sm text-gray-700">
                    <button className="hover:text-blue-700">COMPARE</button>
                    <button className="hover:text-blue-700">DETAILS &gt;</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Industrial;
