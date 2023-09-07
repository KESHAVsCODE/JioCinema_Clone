import axios from "axios";
import { useEffect, useState } from "react";
// import showCategories from "../constants/showCategories";

const useGetShows = ({ page = 1, limit = 10, type = "", id = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showsData, setShowsData] = useState([]);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(true);
  console.log(type);
  useEffect(() => {
    setIsLoading(true);
    setError({});
    axios
      .get(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
        headers: { projectId: "f104bi07c490" },
        params: { page, limit, ...(type && { type }) },
      })
      .then((res) => {
        setIsLoading(false);
        console.log("res.data", res.data);
        if (id) {
          setShowsData(res?.data?.data);
          return;
        }
        setShowsData((prevData) => [...prevData, ...res.data.data]);
      })
      .catch((e) => {
        setError(e.response);
        setIsLoading(false);
        setHasNextPage(false);
      });
  }, [page, limit, type, id]);
  return { isLoading, error, showsData, hasNextPage };
};

export default useGetShows;
