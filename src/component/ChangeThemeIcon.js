import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";


const ChangeThemeIcon = () => {
  const {theme , toggleTheme}  = useContext(ThemeContext);
  return (
    <div className="fixed right-8 bottom-8">
      <IconButton
        className={`rounded-full border border-${theme.text}`}
        color={theme.btn}
        onClick={toggleTheme}
      >
        <FontAwesomeIcon icon={faSun} />
      </IconButton>
    </div>
  );
};
export default ChangeThemeIcon;
