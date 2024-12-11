import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ images, propertyType }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Handle next & prvious image naviagtion
  const handleNavigation = (direction) => {
    setImageIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === images.length - 1 ? prevIndex : prevIndex + 1;
      } else {
        return prevIndex === 0 ? prevIndex : prevIndex - 1;
      }
    });
  }; 

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <div className="w-full h-full rounded-lg overflow-hidden group">
        <img
          src={images[imageIndex]}
          alt={`Slide ${imageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>

      <button
        onClick={() => handleNavigation("prev")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-white ps-2 text-xl rounded-full transition duration-300 ease-in-out  hover:-translate-x-1 hover:scale-110 ${
          imageIndex === 0 ? "hidden" : ""
        } `}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => handleNavigation("next")}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-white pe-2 text-xl rounded-full transition duration-300 ease-in-out  hover:translate-x-1 hover:scale-110 ${
          imageIndex === images.length - 1 ? "hidden" : ""
        }`}
      >
        <IoIosArrowForward />
      </button>
      <div className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 text-xs rounded-md">
        {propertyType}
      </div>
      
      <div className="absolute bottom-2 right-0 transform -translate-x-1/2 flex space-x-2">
        <div className="bg-black bg-opacity-50 rounded-md px-1 py-1 text-xs text-white text-end w-full">{`${
          imageIndex + 1
        }/${images.length}`}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
