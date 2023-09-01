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
      <div name="slide_container" className="overflow-hidden min-w-[100vw]">
        <div
          name="slider"
          style={{
            transform: `translateX(${slideImagePosition * 100}%)`,
          }}
          className="flex transition-transform duration-500"
        >
          {featuredShowData.map((show) => {
            return (
              <div
                name="slide"
                key={show.id}
                className="flex items-end  min-w-[100vw] pt-12 relative"
              >
                <div className="absolute px-6 mb-4  lef-0 z-20">
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
                <div className=" self-end w-[100%] mdl:w-[60%] relative">
                  <img src={show.image} alt="show-image" />
                  <div className="absolute  w-full h-full top-0 gradient-bg"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center ">
          <ul className="flex-grow flex gap-3 justify-end">
            {featuredShowData.map((show) => (
              <li
                key={show.title}
                className="w-2 h-2 rounded-full  bg-[#aaa]"
              ></li>
            ))}
          </ul>
          <div className="flex-grow flex justify-center">
            <button
              onClick={handlePrevClick}
              className="border w-12 h-12 rounded-full mr-4"
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

/* 
<section name="slide" className="flex justify-end">
        <div
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgb(21, 21, 21)), url(${card.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[100vh] w-[50vw]"
        ></div>
      </section>
 */

/* 
import { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import productsCategoryImages from "../../assets/productCategoriesImages/productCategoriesImages";
// import Products from "../Products";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
} from "../../assets/images";

const featuredProductsImages = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

const FeaturedProductsSection = () => {
  const [slideImagePosition, setSlideImagePosition] = useState(0);

  // const userDetails = useSelector((state) => state.signinDetails.userDetails);
  // const navigate = useNavigate();

  const handlePrevProductClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === 0
        ? -(featuredProductsImages.length - 1)
        : prevPosition + 1
    );
  };

  const handleNextProductClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === -(featuredProductsImages.length - 1)
        ? 0
        : prevPosition - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextProductClick();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section name="hero-featured" className="h-max relative">
        <div name="slider-container" className="overflow-hidden">
          <div
            name="slider"
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${slideImagePosition * 100}%)`,
            }}
          >
            {featuredProductsImages.map((image, index) => (
              <div name="slides" key={index} className="min-w-[100%]">
                <img src={image} alt="featured-product-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[50%] absolute left-0 right-0 top-0 text-white justify-between ">
          <button
            className="md:px-2 flex items-center rounded-[5px] focus:shadow-inlineButtonShadow justify-center cursor-pointer"
            onClick={handlePrevProductClick}
          >
            <NavigateBeforeIcon
              style={{
                fontSize: "3rem",
              }}
            />
          </button>
          <button
            className="md:px-2 flex items-center justify-center rounded-[5px] focus:shadow-inlineButtonShadow cursor-pointer"
            onClick={handleNextProductClick}
          >
            <NavigateNextIcon
              style={{
                fontSize: "3rem",
              }}
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductsSection;

 */
