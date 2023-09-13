import useGetShows from "../../hooks/useGetShows";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import showCategories from "../../constants/showCategories";
import { premium_carousel_icon } from "../../assets/images";
import { Link } from "react-router-dom";
const MediaShowcase = () => {
  const params = useParams();

  const { isLoading, error, showsData } = useGetShows({ id: params?.id });

  const isPremiumContent = (type) => {
    return showCategories.some(
      (category) => category.type.toLowerCase() === type && category.premium
    );
  };

  if (isLoading) {
    return (
      <Oval
        height={50}
        width={50}
        color="#d9008d"
        wrapperStyle={{
          justifyContent: "center",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="##d9008d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }
  if (!showsData?._id) return <p>data not available</p>;

  if (error?.data?.message) {
    return (
      <p className="text-lg text-rose-700 mx-auto">{error?.data?.message}</p>
    );
  }

  return (
    <section name="media-showcase">
      <div
        name="show"
        key={showsData.id}
        className="grid mdl:grid h-[600px]  grid-cols-1 relative "
      >
        <div className="absolute h-full w-full flex flex-col justify-center gap-4  bg-black bg-opacity-40 px-5 sm:px-10 z-20 text-white">
          {isPremiumContent(showsData.type) && (
            <img
              src={premium_carousel_icon}
              alt="premium-content"
              className="mb-1 w-20 sm:mb-3 sm:w-28"
            />
          )}
          <Link to="watch" state={{ showLink: showsData.video_url }}>
            <button className="customButton flex items-center  max-w-max">
              <i className="fa-solid fa-play pr-2 text-base"></i>
              <p>WATCH</p>
            </button>
          </Link>
          <h2 className="text-xl  sm:text-4xl font-bold">{showsData.title}</h2>
          <p className="text-sm sm:text-lg ">{showsData.description}</p>

          <ul className="flex gap-3 flex-wrap ">
            <li className="font-medium">Genre :</li>
            {showsData.keywords.map((item) => (
              <li
                key={item}
                className="underline underline-offset-2 text-sm "
              >{`${item[0].toUpperCase() + item.slice(1)}`}</li>
            ))}
          </ul>

          <ul name="cast" className="flex gap-3 flex-wrap">
            <li className="font-medium ">Cast : </li>
            {showsData.cast.map((item) => (
              <li
                key={item}
                className="underline underline-offset-2 text-sm"
              >{`${item[0].toUpperCase() + item.slice(1)}`}</li>
            ))}
          </ul>

          <span>
            <span className="font-medium">Director :</span>
            <span className="underline underline-offset-2 pl-3 text-sm">
              {showsData.director}
            </span>
          </span>
        </div>
        <div className="relative">
          <img
            src={showsData.thumbnail}
            alt="show-image"
            className="w-full max-h-[600px] h-full object-cover object-center"
          />
          <div className="absolute w-full h-full top-0 show-gradient-bg"></div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
