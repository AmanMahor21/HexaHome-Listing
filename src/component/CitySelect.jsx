import React, { useContext, useState } from "react";
import Select from "react-select";
import { cityOptions, cityChangeOptions } from "../constants/cityOptions";
import { IoSearch } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowUpLeft } from "react-icons/go";
import { BiCurrentLocation } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { HexahomeContext } from "../context/ContextProvider";

// Custom style for Property Search Input
const customStyles = {
  container: (provided) => ({
    ...provided,
    height: "100%",
    width: "600px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#ceced4",
    textAlign: "left",
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: "0px",
    width: "600px",
  }),
  menuList: (provided) => ({
    ...provided,
    width: "100%",
  }),
  input: (provided) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    textAlign: "left",
    width: "100%",
    height: "100%",
    borderRadius: state.menuIsOpen ? "0px 10px 0 0" : "0 10px 10px 0 ",
    borderColor: "#d1d1d196",
    boxShadow: "none",
    outline: "none",
    "&:hover": {
      borderColor: "#d1d1d196",
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "#0177b41a",
    borderRadius: "199px",
    padding: "0px 10px",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
  }),
  multiValueRemove: (styles, state) => ({
    ...styles,
    padding: " 2px 0 0 -8px",
    color: "rgb(14 165 233)",
    svg: {
      width: "20px",
      height: "20px",
    },
    cursor: "pointer",
    ":hover": {
      color: "none",
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    color: "red",
    cursor: "pointer",
    svg: {
      width: "20px",
      height: "20px",
    },
    ":hover": {
      color: "green",
    },
  }),
};


//Custom option for react select
const CustomOption = (props) => {
  const { data, innerRef, innerProps, isFocused } = props;

  return (
    <>
      <div
        className=" flex justify-between items-center "
        ref={innerRef}
        {...innerProps}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: isFocused ? "#ceced45c" : "",
        }}
      >
        <div className="flex items-center gap-2 ">
          <div className="bg-sky-100/80  rounded-3xl p-1 flex justify-center items-center">
            <HiLocationMarker className="text-sky-500" />
          </div>
          <p>{data.label}</p>
        </div>
        {data.value !== "near property" ? (
          <GoArrowUpLeft className="text-gray-400" />
        ) : (
          <BiCurrentLocation className="text-sky-500 text-2xl" />
        )}
      </div>
    </>
  );
};

const CitySelect = () => {
  const { selectedValue, setSelectedValue } = useContext(HexahomeContext);
  const [options, setOptions] = useState(cityOptions);
  const [isFocused, setIsFocused] = useState(false);

  // Handle city select 
  const handleChange = (selectedOption) => {
    if (!selectedOption || selectedOption.length === 0) {
      setSelectedValue(null);
      setOptions(cityOptions);
      return;
    }
    setSelectedValue(...selectedOption);

    const updatedOptions = cityChangeOptions.map((ele) => {
      if (ele.value === "change Location") {
        return {
          ...ele,
          label: `${ele.label} ${selectedOption[0].label}`,
          isDisabled: true,
        };
      }
      return {
        ...ele,
        isDisabled: true,
      };
    });
    setOptions(updatedOptions);
  };

  return (
    <div className="h-full flex relative group " tabIndex={0}>
      <div
        className={`h-full flex justify-center items-center px-3 gap-4 border ${
          isFocused ? "rounded-bl-none" : "rounded-bl-xl"
        } border-e-0 rounded-tl-xl`}
      >
        <p>Residental Buy</p>
        <IoIosArrowDown />
      </div>
      <Select
        value={selectedValue ? [selectedValue] : []}
        options={options}
        onChange={handleChange}
        styles={customStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search for city, locality, area"
        isMulti
        components={{
          DropdownIndicator: (props) => (
            <div className="flex items-center px-2">
              <div className="focus:hidden">
                {!isFocused ? (
                  <BiCurrentLocation className="text-2xl text-sky-500 cursor-pointer" />
                ) : (
                  ""
                )}
              </div>
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              <div>
                <IoSearch className=" text-2xl cursor-pointer" />
              </div>
            </div>
          ),
          IndicatorSeparator: null,
          ClearIndicator: (props) => (
            <div
              {...props.innerProps}
              style={{
                cursor: "pointer",
                color: "rgb(7, 121, 172)",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                padding: "0 0 2px 5px",
              }}
            >
              Clear
            </div>
          ),
          Option: CustomOption,
        }}
      />
    </div>
  );
};

export default CitySelect;
