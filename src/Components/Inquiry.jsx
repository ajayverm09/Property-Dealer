import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

function InquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
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
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setIsOpen(false); // close after submit
  };

  return (
    <div className="fixed bottom-4 right-4 md:top-32 md:right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-700 hover:bg-sky-800 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaEnvelopeOpenText size={24} />
        </button>
      ) : (
        <div className="bg-sky-700 opacity-90 p-4 rounded shadow-md w-full max-w-xs sm:w-80">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg text-white font-semibold">Inquiry</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="text-white block">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="text-white block">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="text-white block">Mobile</label>
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="text-white block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default InquiryForm;
