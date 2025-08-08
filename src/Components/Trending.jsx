function Trending() {
  return (
    <div>
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Trending Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          
          <div className="border p-4 shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD0a1nH5ZvStcsWtFi7ma5JLYrDEySCHoIw&s"
              className="w-full h-48 object-cover rounded mb-3"
              alt="Whiteland Blissville"
            />
            <h3 className="text-lg font-semibold">Whiteland Blissville</h3>
            <p className="text-sm text-gray-600">Sector 76, Gurugram</p>
          </div>
         

          <div className="border p-4 shadow-md rounded-lg transition cursor-pointer duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://housing-images.n7net.in/01c16c28/25fc65650a9e4991cffd40e5e998d9c6/v0/medium/3_bhk_apartment-for-sale-sector_82_1-Mohali-others.jpg"
              className="w-full h-48 object-cover rounded mb-3"
              alt="Mapsko Mount Ville"
            />
            <h3 className="text-lg font-semibold">Mapsko Mount Ville</h3>
            <p className="text-sm text-gray-600">Sector 79, Gurugram</p>
          </div>

          <div className="border p-4 shadow-md rounded-lg transition cursor-pointer duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsKlIpMCna9uHbnKZlVDOc1k5qnhqagWBHaw7A9EBruUPDtel8GrTiiRc4Nnm083LM9c&usqp=CAU"
              className="w-full h-48 object-cover rounded mb-3"
              alt="M3M Cullinan"
            />
            <h3 className="text-lg font-semibold">M3M Cullinan</h3>
            <p className="text-sm text-gray-600">Sector 94, Noida</p>
          </div>

          <div className="border p-4 shadow-md rounded-lg transition cursor-pointer duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://housing-images.n7net.in/354cef8f/63eddd8f5e4ef4a49f4a47af8bc0439a/v0/medium.jpg"
              className="w-full h-48 object-cover rounded mb-3"
              alt="Puri The Aravallis"
            />
            <h3 className="text-lg font-semibold">Puri The Aravallis</h3>
            <p className="text-sm text-gray-600">Sector 61, Gurugram</p>
          </div>

          <div className="border p-4 shadow-md rounded-lg transition cursor-pointer duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://is1-3.housingcdn.com/01c16c28/6d79899912ba14e91042a2f09227477e/v0/fs/5_bhk_independent_house-for-sale-kalpataru_nagar-Nashik-others.jpg"
              className="w-full h-48 object-cover rounded mb-3"
              alt="Godrej Nest"
            />
            <h3 className="text-lg font-semibold">Godrej Nest</h3>
            <p className="text-sm text-gray-600">Sector 150, Noida</p>
          </div>

          <div className="border p-4 shadow-md rounded-lg transition cursor-pointer duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8OlkkJSTcK_1lw5U3scMzCIa6kwwYVaIBvjzoChkLKajoO2Zd059rfXBEn2YCmNy6bA&usqp=CAU"
              className="w-full h-48 object-cover rounded mb-3"
              alt="ATS Kinghood Drive"
            />
            <h3 className="text-lg font-semibold">ATS Kinghood Drive</h3>
            <p className="text-sm text-gray-600">Sector 152, Noida</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Trending;
