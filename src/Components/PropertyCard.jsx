import React from "react";

const PropertyCard = ({ image, title, price, type, size, location, link, text }) => {
  return (
    <div className="w-full sm:w-72 bg-white shadow-lg rounded overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img src={image} alt={title} className="h-48 w-full object-cover sm:h-56 md:h-64" />
          <span className="absolute top-2 right-2 bg-blue-900 text-white text-xs sm:text-sm px-2 py-1 rounded">
            {text}
          </span>
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          <p className="text-blue-700 mt-1 font-medium text-sm sm:text-base">{price}</p>
          <p className="text-xs sm:text-sm mt-1">
            <strong>Type:</strong> {type} &nbsp;&nbsp;
            <strong>Size:</strong> {size} ft²
          </p>
          <p className="text-xs sm:text-sm text-gray-600">{location}</p>
        </div>
      </a>
      <div className="flex justify-between px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-700 font-medium">
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
