import ShowsSlider from "./ShowsSlider";
import showCategories from "../../constants/showCategories";
const ListOfShows = () => {
  return (
    <section name="shows">
      <ul>
        {showCategories.map((showCategory) => {
          return (
            <li key={showCategory.type.toLowerCase()} className="pb-10">
              <h3 className="text-white font-semibold text-2xl px-4 pb-1">
                {showCategory.type}
              </h3>
              <ShowsSlider type={showCategory.type.toLowerCase()} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListOfShows;
