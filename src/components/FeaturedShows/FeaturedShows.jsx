import featuredShowData from "../../constants/featuredShowData";
import { useState } from "react";
const FeaturedShows = () => {
  const [slideImagePosition, setSlideImagePosition] = useState(0);

  const handlePrevClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === 0 ? -(featuredShowData.length - 1) : prevPosition + 1
    );
  };

  const handleNextClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === -(featuredShowData.length - 1) ? 0 : prevPosition - 1
    );
  };

  return (
    <section name="featured_shows" className="">
      <div name="slide_container" className="overflow-hidden w-[100%] mt-10">
        <ul
          name="slider"
          style={{
            transform: `translateX(${slideImagePosition * 100}%)`,
          }}
          className="flex transition-transform duration-500"
        >
          {featuredShowData.map((show) => {
            return (
              <li
                name="slide"
                key={show.id}
                className="flex min-w-[100%] relative mdl:flex-row-reverse"
              >
                <div className="absolute bottom-0 lg:bottom-10 left-6 z-20 ">
                  <h2 className="text-white text-lg sm:text-3xl font-bold">
                    {show.title}
                  </h2>
                  <p className="text-xs font-medium text-defaultTextColor mt-2">
                    {"Hindi Comedy"}
                  </p>
                  <button className="text-white customButton flex items-center mt-4">
                    <i className="fa-solid fa-play pr-2 text-base"></i>
                    <p>WATCH</p>
                  </button>
                </div>
                <div className="w-[100%] mdl:w-[60%] relative">
                  <img src={show.image} alt="show-image" />
                  <div className="absolute w-full h-full top-0   gradient-bg"></div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center ">
          <ul className="flex-grow flex gap-3 justify-end">
            {featuredShowData.map((show, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSlideImagePosition(-index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-width duration-300 ease-linear   bg-[#aaa] ${
                    index === Math.abs(slideImagePosition) ? "w-6 bg-white" : ""
                  }`}
                ></li>
              );
            })}
          </ul>
          <div className="flex-grow flex justify-center">
            <button
              onClick={handlePrevClick}
              className="border w-12 h-12 rounded-full mr-4 "
            >
              <i className="fa fa-arrow-left text-lg"></i>
            </button>

            <button
              onClick={handleNextClick}
              className="border w-12 h-12 rounded-full"
            >
              <i className="fa fa-arrow-right text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShows;
