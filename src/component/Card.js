import { faStar , faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Card = ({id ,year , rating ,  title , description ,  imageUrl , select}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 max-w-xl p-4">
      <div className={`h-full rounded overflow-hidden shadow shadow-gray-500 flex flex-col justify-between`}>
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="font-light mt-4">Rating: {rating}/10<FontAwesomeIcon icon={faStar} className="ml-2 text-yellow-400" /></p>
          <p className="font-light mt-4">Year: {year}<FontAwesomeIcon icon={faCalendar} className="ml-2 " /></p>
        </div>
        <Button className="shadow-none rounded-none	"  color={theme.btn}  fullWidth onClick={() => select(id)}>Read more</Button>
      </div>
    </div>
  );
}
export default Card;
