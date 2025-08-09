import React from "react";

const staffMembers = [
  { name: "Ananya Sharma", role: "Lead Interior Designer", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Rohan Mehta", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Priya Kapoor", role: "3D Visualizer", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Arjun Verma", role: "Architect", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Ishita Rao", role: "Lighting Expert", img: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Kabir Khanna", role: "Furniture Designer", img: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Simran Kaur", role: "Textile Specialist", img: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Rahul Jain", role: "Site Supervisor", img: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Tanya Bhatia", role: "Color Consultant", img: "https://randomuser.me/api/portraits/women/9.jpg" },
  { name: "Vikram Sethi", role: "Construction Lead", img: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Nisha Agarwal", role: "Decor Stylist", img: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Aditya Malhotra", role: "Carpentry Expert", img: "https://randomuser.me/api/portraits/men/12.jpg" },
];

export default function OurStaff() {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Meet Our Team</h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate group of designers and professionals dedicated to transforming spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {staffMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
