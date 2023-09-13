import { useParams, Link } from "react-router-dom";
import useGetShows from "../../hooks/useGetShows";
import { useRef, useCallback, useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
const ShowType = () => {
  const params = useParams();

  const [page, setPage] = useState(1);

  const { isLoading, showsData, error, hasNextPage, setShowType } = useGetShows(
    {
      page,
      limit: 10,
      setPage,
      type: null,
    }
  );

  useEffect(() => {
    setPage(1);
    setShowType(params.show_type);
  }, [params.show_type]);

  const observer = useRef();

  //when lastShowRef corresponding element created then this callback will be called
  const lastShowRef = useCallback(
    (element) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 0.0 }
      );

      if (element) observer.current.observe(element);
    },
    [isLoading, hasNextPage]
  );

  return (
    <section name="show_type" className="p-4 mdl:p-5 mb-10">
      <div className="flex flex-wrap pr-4 mdl:pr-5 scroll-smooth">
        {showsData.map((show, index) => {
          if (index === showsData.length - 1) {
            return (
              <Link
                ref={lastShowRef}
                key={show._id}
                to={`${show.title}/${show._id}`}
                className="pl-4 pt-4 mdl:pl-5 mdl:pt-5 w-1/2 xs:w-1/3 md:w-1/4 mdl:w-1/6 featuredBoxShadow "
              >
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="aspect-[3/4] object-center object-cover rounded-xl cursor-pointer"
                />
                <p className="text-center text-sm px-2 pt-2">{show.title}</p>
              </Link>
            );
          }
          return (
            <Link
              key={show._id}
              to={`${show.title}/${show._id}`}
              className="pl-4 pt-4   mdl:pl-5 mdl:pt-5 w-1/2 xs:w-1/3 md:w-1/4 mdl:w-1/6 featuredBoxShadow relative"
            >
              <div className="relative">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="aspect-[3/4] object-center object-cover rounded-xl cursor-pointer"
                />
                <div className="absolute inset-0 bg-white rounded-xl  opacity-0 hover:opacity-10 transition-opacity duration-300 "></div>
              </div>
              <p className="text-center text-xs font-semibold px-2 pt-2">
                {show.title}
              </p>
            </Link>
          );
        })}
        {isLoading && (
          <div key="loading" className="pl-4 m-auto ">
            <Oval
              height={50}
              width={50}
              color="#d9008d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="##d9008d"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          </div>
        )}
        {error && (
          <p className="pl-4 m-auto text-center text-lg text-rose-700">
            {!hasNextPage ? "The End" : error?.data?.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default ShowType;
