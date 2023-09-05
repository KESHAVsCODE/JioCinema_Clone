import axios from "axios";
import { useEffect, useState } from "react";
// import showCategories from "../constants/showCategories";

const useGetShows = (page = 10000, limit = 10000, type = "video song") => {
  const [isLoading, setIsLoading] = useState(false);
  const [showsData, setShowsData] = useState([]);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError({});
    axios
      .get("https://academics.newtonschool.co/api/v1/ott/show", {
        headers: { projectId: "f104bi07c490" },
        params: { page, limit, ...(type && { type }) },
      })
      .then((res) => {
        setIsLoading(false);
        setShowsData((prevData) => [...prevData, ...res.data.data]);
      })
      .catch((e) => {
        setError(e.response);
        setIsLoading(false);
        setHasNextPage(false);
      });
  }, [page, limit, type]);
  return { isLoading, error, showsData, hasNextPage };
};

export default useGetShows;
