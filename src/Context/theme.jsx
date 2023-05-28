import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();
// localStorage.setItem("theme", "light");

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState(localStorage.theme);
  const toggeltheme = () => {
    themename === "light" ? setthemename("dark") : setthemename("light");
  };
  useEffect(() => {
    const root = window.document.documentElement;
    // root.classList.remove();
    root.classList.add(themename);
    localStorage.setItem("theme", themename);
  }, [themename, toggeltheme]);

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
