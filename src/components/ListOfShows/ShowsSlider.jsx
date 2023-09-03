// import showsData from "../../constants/showsData";
import { useEffect, useRef, useState } from "react";
const ShowsSlider = () => {
  const sliderRef = useRef(null);

  const [showsData, setShowsData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?type=web series&page=${1}&limit=${10}`,
        { method: "GET", headers: { projectId: "f104bi07c490" } }
      );
      const data = await response.json();
      console.log(data);
      setShowsData(data?.data);
    })();
  }, []);

  console.dir(sliderRef.current);

  const handlePrevClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    setCount((prev) => prev + 1);
  };

  return (
    <section
      name="slider-container"
      className="w-full  relative group box-border"
    >
      <div
        onClick={handlePrevClick}
        className={`flex
        
          absolute  opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#222] z-[100] top-0 bottom-0 left-0  px-2 items-center transition-opacity duration-300 ease-linear cursor-pointer`}
      >
        <i className="fa-solid fa-angle-left text-white text-3xl"></i>
      </div>

      <ul
        ref={sliderRef}
        name="slider"
        className="grid grid-flow-col auto-cols-[27%] sm:auto-cols-[17%] lg:auto-cols-[11%] px-4 gap-4 overflow-x-scroll overscroll-contain smooth-scroll snap-inline no-scrollbar"
      >
        {showsData?.map((show) => {
          return (
            <li key={show.id} id={show.id} className=" snap-start">
              <img
                src={show.thumbnail}
                className="aspect-[3/4]  object-cover rounded-xl cursor-pointer"
              />
            </li>
          );
        })}
      </ul>

      <div
        onClick={handleNextClick}
        className={`
          
          absolute flex opacity-0 group-hover:opacity-100 bg-gradient-to-l from-[#222] z-[100] top-0 bottom-0 right-0  px-2 items-center transition-opacity duration-300 ease-linear cursor-pointer`}
      >
        <i className="fa-solid fa-angle-right text-white text-3xl"></i>
      </div>
    </section>
  );
};

export default ShowsSlider;
