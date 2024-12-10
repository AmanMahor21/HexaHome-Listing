import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterPropety_left = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <div className="p-5 max-w-md border w-[26vw] h-fit sticky border-gray-300 rounded-lg ms-20 bg-white shadow">
      <div className="flex justify-between border-b">
        <p className="text-lg">Filters</p>
        <button className="text-[10px]">Clear All</button>
      </div>
      <div className="">
        <div className="flex justify-between py-3">
          <p>Property Type</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>Property Condition</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>BHK Type</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>Budget</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>Furnish Type</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>Facing</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>Posted by</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>View only properties with images</p>
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between py-3">
          <p>View only hot deals properties</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
    // <div className="p-5 max-w-md border w-[26vw] h-fit border-gray-300 rounded-lg ms-20 bg-white shadow">
    //   {/* Header */}
    //   <div className="flex justify-between items-center mb-5">
    //     <h3 className="text-lg font-semibold">Filters</h3>
    //     <button onClick={clearAll} className="text-blue-500 hover:underline">
    //       Clear All
    //     </button>
    //   </div>

    //   {/* Filters */}
    //   {Object.entries(filterOptions).map(([filterName, options]) => (
    //     <div key={filterName} className="mb-4">
    //       {/* <label className="font-medium text-gray-700 mb-2 block">
    //         {filterName}
    //       </label> */}
    //       <Select
    //         options={options}
    //         isMulti
    //         value={selectedFilters[filterName] || []}
    //         onChange={(selectedOption) =>
    //           handleChange(filterName, selectedOption)
    //         }
    //         placeholder={`Select ${filterName}`}
    //         className="react-select-container"
    //         classNamePrefix="react-select"
    //       />
    //     </div>
    //   ))}
    // </div>
  );
};

export default FilterPropety_left;
