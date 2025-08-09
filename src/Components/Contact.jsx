import React from "react";

function ContactPage() {
  return (
    <div>
      <div
        className="relative w-full h-36 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://manchandarealtors.com/wp-content/uploads/2021/06/contact-us-1-scaled.jpg?id=5538')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <p className="relative text-white text-3xl z-10">Contact Us</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Corporate Office:</h2>
            <p className="mb-2">
              <span className="font-semibold">🏢 Company Name:</span>{" "}
              <span className="font-bold text-blue-900">Manchanda Realtors Private Limited</span>
            </p>
            <p className="text-gray-700">
              📍 <span className="font-semibold">Address:</span> # 36A & 36B, Ground Floor, Edmonton Shopping Mall, Hotel THE BRISTOL, M.G Road, Gurugram-122002 (Haryana)
            </p>
          </div>

          <div className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Details:</h2>
            <p className="mb-2">📱 <strong>Mobile No:</strong> +91 9871727717, +91 9971911131</p>
            <p className="mb-2">☎️ <strong>Landline No:</strong> 0124-4076677</p>
            <p>
              📧 <strong>Email ID:</strong>
              <a href="mailto:vikas@manchandarealtors.com" className="text-blue-700 ml-1">vikas@manchandarealtors.com</a>,
              <a href="mailto:aakash@manchandarealtors.com" className="text-blue-700 ml-1">aakash@manchandarealtors.com</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">WRITE TO US</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
              >
                SEND
              </button>
            </form>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.044250166741!2d77.0859812752759!3d28.62704868479482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27d2d4f29d7%3A0x3e2b89b9d9e1a9e7!2sManchanda%20Realtors%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="rounded border w-full"
              allowFullScreen=""
              loading="lazy"
              title="Manchanda Realtors Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
