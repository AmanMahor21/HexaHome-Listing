import React, { useContext, useEffect, useRef, useState } from "react";
import { mockListing } from "../constants/mockListing";
import { HexahomeContext } from "../context/ContextProvider";
import PropertyCard from "./PropertyCard";

const PropertyListing = () => {
  const { selectedValue } = useContext(HexahomeContext);
  const [currLocation, setCurrLocation] = useState("");
  const [filteredProperty, setFilteredProperty] = useState([]);

  const propertyInfo_scroll = useRef([]);

  // Filtering Poperty on the basis on selected city in searchInput
  useEffect(() => {
    const matchedProperty = mockListing.filter((ele) =>
      ele.location.toLowerCase().includes(selectedValue?.label.toLowerCase())
    );
    setFilteredProperty(matchedProperty);

    if (selectedValue?.label) {
      setCurrLocation(selectedValue.label);
    }
  }, [selectedValue]);

  // Handle scroll natigation of propertyInfo 
  const handleInfoScroll = (move, index) => {
    const scrollContainer = propertyInfo_scroll.current[index];
    if (scrollContainer) {
      if (move === "right") {
        scrollContainer.scrollBy({ left: 170, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: -170, behavior: "smooth" });
      }
    }
  };


  const showCard =
    filteredProperty?.length > 0 ? filteredProperty : mockListing;
  return (
    <div className="p-6 mx-14 flex-1 ">
      <h1 className="text-sm mb-4 text-start ps-1 ms-56 font-semibold">
        {currLocation
          ? `Property for sale in ${currLocation}`
          : "Property for sale in"}
      </h1>
      <div className="space-y-6 flex items-center flex-col">
        {showCard.length > 0 ? (
          showCard.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              index={index}
              handleInfoScroll={handleInfoScroll}
              propertyInfo_scroll={propertyInfo_scroll}
            />
          ))
        ) : (
          <div>No properties available</div>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;