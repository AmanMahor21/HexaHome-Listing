import React, { createContext, useState } from "react";

export const HexahomeContext = createContext();


export const HexahomeProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <HexahomeContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </HexahomeContext.Provider>
  );
};
