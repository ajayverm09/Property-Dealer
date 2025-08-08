import React, { useState } from "react";

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("inquiryData", JSON.stringify(formData));
    alert("Form data saved to localStorage!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="fixed top-32 right-4 z-50 bg-sky-700 opacity-90 p-4 rounded shadow-md w-72 hidden md:block">
      <h3 className="text-lg text-center text-white font-semibold">Inquiry</h3>
      <form onSubmit={handleSubmit}>
        <label className="text-white block mt-2">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-1 mt-1"
        />

        <label className="text-white block mt-2">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-1 mt-1"
        />

        <label className="text-white block mt-2">Mobile</label>
        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border p-1 mt-1"
        />

        <label className="text-white block mt-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-1 mt-1"
          rows="3"
        ></textarea>

        <button
          type="submit"
          className="w-full mt-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:border"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;
