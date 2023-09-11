import ShowsSlider from "./ShowsSlider";
import showCategories from "../../constants/showCategories";
import { Link } from "react-router-dom";

const ListOfShows = () => {
  return (
    <section name="shows">
      <ul>
        {showCategories.map((showCategory) => {
          console.log("showCategories.premium", showCategory.premium);
          return (
            <li key={showCategory.type.toLowerCase()} className="pb-10">
              {showCategory.featuredShow && (
                <div className="mx-8 my-6 overflow-hidden cursor-pointer relative ">
                  <img
                    src={showCategory.featuredShow}
                    alt="featured_show"
                    className="rounded-3xl shadow-featuredBoxShadow "
                  />
                  <div className="absolute inset-0 bg-white rounded-3xl  opacity-0 hover:opacity-5 transition-opacity duration-300 "></div>
                </div>
              )}
              <div className="flex justify-between px-4 pb-1 items-center">
                <h3 className="text-white font-semibold text-2xl ">
                  {showCategory.type}
                </h3>
                <Link to={`${showCategory.type.toLocaleLowerCase()}`}>
                  <i className="fa-solid fa-angles-right hover:scale-125 transition-transform  text-xl cursor-pointer"></i>
                </Link>
              </div>
              <ShowsSlider
                type={showCategory.type.toLowerCase()}
                isPremiumContent={showCategory.premium}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListOfShows;
