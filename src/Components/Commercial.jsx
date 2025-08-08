import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <PropertyCard
        image="https://www.webfx.com/wp-content/uploads/2021/10/0451-08-website-background-image-levehytter.jpg"
        link="https://www.webfx.com/wp-content/uploads/2021/10/0451-08-website-background-image-levehytter.jpg"
        title="Whiteland "
        text ="HOT OFFER!!"
        price="7.44 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-69, Gurugram"
      />
      <PropertyCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPCyGk7s6l5-2BDHGrdSXyXK_8pz3TtSfA7dTP2ZZ2sgIR9Ws1gTxuGvze542NKjoePg&usqp=CAU"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPCyGk7s6l5-2BDHGrdSXyXK_8pz3TtSfA7dTP2ZZ2sgIR9Ws1gTxuGvze542NKjoePg&usqp=CAU"
        title="Greenland Blissville"
        text ="HOT OFFER!!"
        price="5.3 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-26, Chandigarh"
      />
      <PropertyCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcsNt79gjytcS9YrOfnejdSxmOoVI_GYt0eL77a4fAZdx_vsihsZl8tSIVHJS_Zh4XYo&usqp=CAU"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcsNt79gjytcS9YrOfnejdSxmOoVI_GYt0eL77a4fAZdx_vsihsZl8tSIVHJS_Zh4XYo&usqp=CAU"
        title=" Blissville"
        text ="HOT OFFER!!"
        price="4.44 Cr."
        type="Semi Furnished"
        size="4011"
        location="Sector-76, Hisar"
      />
    </div>
  );
};

export default PropertyList;
