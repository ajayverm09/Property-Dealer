import React from "react";

const teamMembers = [
  {
    name: "Vikas Manchanda",
    role: "Founder & Managing Director",
    phone: "+91 9871727717",
    email: "vikas@manchandarealtors.com",
    image: "https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg",
  },
  {
    name: "Aakash Manchanda",
    role: "Founder & Director",
    phone: "+91 9971911131",
    email: "aakash@manchandarealtors.com",
    image: "https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg",
  },
  {
    name: "Devender Singh",
    role: "Corporate Leasing & Sales",
    phone: "+91 9871004550",
    email: "devender@manchandarealtors.com",
    image: "https://manchandarealtors.com/wp-content/uploads/2024/12/2-1.jpg",
  },
  {
    name: "Himanshu Dham",
    role: "Residential Property Advisor",
    phone: "+91 9718673075",
    email: "himanshu@manchandarealtors.com",
    image: "https://manchandarealtors.com/wp-content/uploads/2024/12/5-2.jpg",
  },
  {
    name: "Aman Gupta",
    role: "Property Advisor",
    phone: "+91 9871000815",
    email: "aman@manchandarealtors.com",
    image: "https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg",
  },
  {
    name: "Pramod Rajak",
    role: "Residential Sales & Leasing",
    phone: "+91 8589033726",
    email: "pramod@manchandarealtors.com",
    image: "https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg",
  },
  {
    name: "Chetana",
    role: "Sales Executive",
    phone: "+91 7303084452",
    email: "chetana@manchandarealtors.com",
    image: "https://manchandarealtors.com/wp-content/uploads/2024/12/4-1.jpg",
  },
  {
    name: "Barkha Rajput",
    role: "Sr. Sales Executive",
    phone: "+91 9560842692",
    email: "barkha@manchandarealtors.com",
    image: "https://manchandarealtors.com/wp-content/uploads/2024/12/Untitled-design-51.jpg",
  },
  {
    name: "Rohit Thakur",
    role: "Corporate Leasing and Sales",
    phone: "+91 9560842616",
    email: "rohit@manchandarealtors.com",
    image: "https://manchandarealtors.com/wp-content/uploads/2024/12/1-1.jpg",
  },
  {
    name: "Satya Bhan",
    role: "Residential Sales Executive",
    phone: "+91 7303084455",
    email: "satya@manchandarealtors.com",
    image: "https://i.pinimg.com/280x280_RS/26/2c/58/262c58b8446f585d6b1f406a1e6c1ca4.jpg",
  },
];

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Team
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-6 text-center flex flex-col items-center gap-4"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-bold">
                MRPL
              </div>
            )}
            <h2 className="text-blue-700 font-semibold text-lg">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-800">{member.phone}</p>
            <a href={`mailto:${member.email}`} className="text-sm text-blue-500">
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
