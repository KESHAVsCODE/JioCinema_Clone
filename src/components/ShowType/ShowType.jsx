import { useParams } from "react-router-dom";
import useGetShows from "../../hooks/useGetShows";
const ShowType = () => {
  const params = useParams();
  console.log("params.show_type", params.show_type);
  const { isLoading, error, showsData } = useGetShows({
    type: params.show_type,
  });
  console.log(showsData);

  console.log("FEFE");

  return (
    <section name="show_type">
      <div>this is sectiion</div>
    </section>
  );
};

export default ShowType;
