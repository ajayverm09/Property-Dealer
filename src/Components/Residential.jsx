import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <PropertyCard
        image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        title="Whiteland Blissville"
        text ="HOT OFFER!!"
        price="1.44 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-76, Gurgaon"
      />
      <PropertyCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s"
        title="Whiteland Blissville"
        text ="FOR SALE"
        price="8 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-76, Gurgaon"
      />
      <PropertyCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC0p-xW1CHAJPUFxWuYDx3yU26m9IEBNfQw&s"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC0p-xW1CHAJPUFxWuYDx3yU26m9IEBNfQw&s"
        title="Whiteland Blissville"
        text ="FOR SALE"
        price="9.66 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-76, Gurgaon"
      />
    </div>
  );
};

export default PropertyList;
