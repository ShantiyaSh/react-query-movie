import { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    type: "light",
    text: "black",
    bg: "white",
    btn: "white",
  });
  const toggleTheme = () => {
    if (theme.type === "light") {
      setTheme({
        type: "dark",
        text: "white",
        bg: "black",
        btn: "gray",
      });
    } else {
      setTheme({
        type: "light",
        text: "black",
        bg: "white",
        btn: "white",
      });
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
