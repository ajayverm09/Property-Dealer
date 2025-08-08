import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      
      <PropertyCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsVSBI7Es8gYRNq3QVLYOCo_Bl9utoAl55g&s"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsVSBI7Es8gYRNq3QVLYOCo_Bl9utoAl55g&s"
        title="Whiteland Blissville"
        text ="PRE LEASED"
        price="2.40 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-60, Mumbai"
      />

      <PropertyCard
        image="https://housing-images.n7net.in/01c16c28/4189fee29cd7ede9e4ad1712e0b0af5f/v0/medium/3_bhk_apartment-for-sale-kondhwa-Pune-others.jpg"
        link="https://housing-images.n7net.in/01c16c28/4189fee29cd7ede9e4ad1712e0b0af5f/v0/medium/3_bhk_apartment-for-sale-kondhwa-Pune-others.jpg"
        title="Villa Blissville"
        text ="PRE LEASED"
        price="6.24 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-17, Gurgaon"
      />
      <PropertyCard
        image="https://housing-images.n7net.in/d9dd8fcc/889d4950ccc57b75f5cebca1ce22d3a8/v0/medium.jpg"
        link="https://housing-images.n7net.in/d9dd8fcc/889d4950ccc57b75f5cebca1ce22d3a8/v0/medium.jpg"
        title="Whiteland "
        price="3.77 Cr."
        type="Semi Furnished"
        text ="PRE LEASED"
        size="4011"
        location="Sector-76, New Delhi"
      />
    </div>
  );
};

export default PropertyList;
