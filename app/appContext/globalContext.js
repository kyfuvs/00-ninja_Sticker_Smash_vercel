import React, { createContext, useState } from 'react';

// Create Context
export const GlobalContext = createContext();

// Create a Context Provider component
export const AppProvider = ({ children }) => {
  const [chap, setChap] = useState(null); // Example state

  return (
    <GlobalContext.Provider value={{chap, setChap }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider
