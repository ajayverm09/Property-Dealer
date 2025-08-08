import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rohit Choudhary",
    text: `We just wanted to thank you Himanshu and Aakash so much for your help 
    in purchasing the property in DLF New Town Heights.`
  },
  {
    name: "Anjali Mehra",
    text: `The team was incredibly professional and helpful during my entire 
    home-buying journey. Their knowledge of the Gurugram market was impressive. 
    They guided me at every step and made the process smooth and stress-free.`
  },
  {
    name: "Sameer Malik",
    text: `Excellent service and great communication! From the first call to the 
    final paperwork, everything was handled with care and transparency.`
  },
  {
    name: "Priya Sharma",
    text: `Buying a home can be stressful, but with this team, it was a smooth and positive experience. 
    Highly recommend them for all real estate needs.`
  },
  {
    name: "Amit Verma",
    text: `I was looking for a commercial space in Gurugram and was impressed by their market knowledge. 
    Thank you for everything!`
  },
  {
    name: "Neha Kapoor",
    text: `The team exceeded all expectations. They took the time to understand what I wanted in a home, 
    and didn’t rush me into making a decision.`
  },
  {
    name: "Rajeev Sinha",
    text: `What I appreciated most was their honesty and clear communication. 
    From property visits to paperwork, everything was handled with care.`
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8 tracking-wide text-gray-800">
        TESTIMONIALS
      </h2>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6 text-gray-700 relative transition-all duration-500 ease-in-out">
        <p className="text-2xl leading-relaxed italic relative">
          <span className="text-5xl text-gray-400 absolute -top-4 left-0">“</span>
          {testimonials[current].text}
          <span className="text-5xl text-gray-400 absolute -bottom-4 right-0">”</span>
        </p>
        <p className="text-right mt-6 font-semibold text-gray-900">
          — {testimonials[current].name}
        </p>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
