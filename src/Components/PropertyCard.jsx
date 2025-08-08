import React from "react";

const PropertyCard = ({ image, title, price, type, size, location, link,text }) => {
  return (
    <div
      className="max-w-xs bg-white shadow-lg rounded overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
          <div>
            <span className="absolute top-2 right-2 bg-blue-900 text-white text-xs px-2 py-1 rounded">
            {text}
          </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-blue-700 mt-1 font-medium">{price}</p>
          <p className="text-sm mt-1">
            <strong>Type:</strong> {type} &nbsp;&nbsp;
            <strong>Property size:</strong> {size} ft²
          </p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </a>

      <div className="flex justify-between px-4 pb-4 text-sm text-gray-700 font-medium">
        <span className="flex items-center gap-1 cursor-pointer">
          <i className="ri-file-copy-line"></i> COMPARE
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          DETAILS <i className="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
