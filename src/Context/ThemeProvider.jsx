import React, { createContext, useState } from "react";
export const ThemeContext = createContext(undefined);

const ThemeProvider = ({children}) => {
    const [dark , setDark] = useState(false);
    const values = {
        dark, setDark,
    };


  return <ThemeContext.Provider value={values}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;
