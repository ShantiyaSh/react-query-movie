import { useContext } from "react";
import ChangeThemeIcon from "./ChangeThemeIcon";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/ThemeContext";

export const Layout = ({ children }) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`bg-${theme.bg} text-${theme.text} flex flex-col`}>
      <Navbar />
      {children}
      <ChangeThemeIcon />
    </div>
  );
};
