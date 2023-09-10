import ShowsSlider from "./ShowsSlider";
import showCategories from "../../constants/showCategories";
import { Link } from "react-router-dom";
const ListOfShows = () => {
  return (
    <section name="shows">
      <ul>
        {showCategories.map((showCategory) => {
          return (
            <li key={showCategory.type.toLowerCase()} className="pb-10">
              <div className="flex justify-between px-4 pb-1 items-center">
                <h3 className="text-white font-semibold text-2xl ">
                  {showCategory.type}
                </h3>
                <Link to={`${showCategory.type.toLocaleLowerCase()}`}>
                  <i className="fa-solid fa-angles-right hover:scale-125 transition-transform  text-xl cursor-pointer"></i>
                </Link>
              </div>
              <ShowsSlider type={showCategory.type.toLowerCase()} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListOfShows;
