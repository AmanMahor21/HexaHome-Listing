import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Header from "./component/Header";
import PropertyListing from "./component/PropertyListing";
import { HexahomeContext } from "./context/ContextProvider";

function App() {
  const { selectedValue } = useContext(HexahomeContext);
  const [location, setLocation] = useState(""); 

  // Update location on the basis on selected city
  useEffect(() => {
    if (selectedValue?.label) {
      setLocation(selectedValue.label);
    }
  }, [selectedValue]);
  
  return (
    <div className="App">
      <Header />
      <div className="text-start ms-20 text-xs py-3 text-gray-400">
        {location
          ? `Home > property for buy in ${location}`
          : "Home > property for buy in"}
      </div>
      <div className="flex justify-center relative">
        <PropertyListing />
      </div>
    </div>
  );
}

export default App;
