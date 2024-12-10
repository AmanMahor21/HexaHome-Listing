import React from "react";
import { FaBath, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { MdBalcony } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { GiLift } from "react-icons/gi";
import ImageSlider from "./ImageSlider";
import { FaRegStar } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PropertyCard = ({
  property,
  index,
  handleInfoScroll,
  propertyInfo_scroll,
}) => {
  const { price, label, location, images, propetyInfo, name, propertyType } =
    property;
  const { status, age, furnishedType, area, floor, bath, balcony } =
    propetyInfo;

  return (
    <div
      key={index}
      className="border rounded-lg hover:shadow-md group hover:shadow-gray-300 ease-in-out transform transition-all duration-300 p-4 w-2/3 flex gap-4"
    >
      <div className="w-2/5">
        <ImageSlider images={images} propertyType={propertyType} />
      </div>

      <div className="flex flex-col gap-2 w-3/5">
        <div className="text-sm text-gray-800 text-start justify-between flex font-semibold hover:underline">
          <span>{price}</span>{" "}
          <span>
            <FaRegStar className=" bg-gray-500/50 p-1 text-3xl rounded-full cursor-pointer text-white/70" />
          </span>
        </div>
        <div className="inline-flex gap-1">
          <h2 className="text-xs hover:underline font-bold text-start text-gray-700">
            {label}
          </h2>
          <span className="text-xs text-gray-700 hover:underline">
            {location}
          </span>
        </div>

        <div className="flex items-center">
          <IoIosArrowBack
            className="flex pe-1 text-2xl cursor-pointer"
            onClick={() => handleInfoScroll("left", index)}
          />
          <div
            ref={(el) => (propertyInfo_scroll.current[index] = el)}
            className="flex items-center gap-1 text-gray-600 overflow-x-scroll whitespace-nowrap pt-2 scrollable-element"
          >
            <span className="flex items-center gap-1 bg-gray-100 rounded-md py-1 px-2 text-[10px] cursor-pointer">
              <GrStatusGood className="text-green-500" />
              <span>{status}</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <FaRegCalendarAlt className="text-blue-950" />
              <span>{age}</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <FaTools className="text-orange-600" />
              <span>{furnishedType}</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <HiOutlineArrowsExpand className="text-violet-600" />
              <span>{area}</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <BiBuildingHouse className="text-amber-950" />
              Floor
              <span>{floor}</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <FaBath className="text-teal-500" />
              <span>{bath} Baths</span>
            </span>
            <span className="flex items-center gap-1 cursor-pointer bg-gray-100 rounded-md  py-1 px-2 text-[10px]">
              <MdBalcony className="text-indigo-600" />
              <span>{balcony} Balcony</span>
            </span>
          </div>
          <IoIosArrowForward
            className="flex ps-1 text-2xl cursor-pointer"
            onClick={() => handleInfoScroll("right", index)}
          />
        </div>

        <div className="flex gap-2 bg-sky-100/50 rounded-lg">
          <div className="flex items-center gap-1 cursor-pointer  rounded-lg py-1 px-2 text-xs">
            <FaPowerOff className="text-xs text-red-600" />
            <span className="text-xs flex">Power Backup</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer rounded-lg py-1 px-2 text-xs">
            <GiLift className="text-xs text-blue-600" />
            <span className="text-xs flex">Lift</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <AccountCircleIcon
              sx={{ fontSize: 40 }}
              className="text-gray-500/45 cursor-pointer"
            />
            <span className="text-xs font-semibold cursor-pointer">{name}</span>
          </div>
          <div className="bg-sky-100/30 hover:bg-sky-100/50 text-sky-700 text-[10px] font-semibold px-3 py-2 rounded-md">
            View Number
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
