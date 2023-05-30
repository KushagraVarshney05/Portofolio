import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();
// localStorage.setItem("theme", "light");

const ThemeProvider = ({ children }) => {
  let storedDarkMode = localStorage.getItem("theme");
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  if (storedDarkMode === lightTheme || storedDarkMode === darkTheme) {
    storedDarkMode = localStorage.getItem("theme");
  } else {
    storedDarkMode = lightTheme;
  }
  // localStorage.setItem("theme", );

  console.log("yash varshney");
  console.log(storedDarkMode);
  console.log("yash varshney");
  const [themename, setthemename] = useState(storedDarkMode);
  const toggeltheme = () => {
    themename === "light" ? setthemename("dark") : setthemename("light");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    // root.classList.remove();
    // root.classList.add(themename);
    console.log("kushgare varshney");
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
