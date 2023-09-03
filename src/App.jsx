import Header from "./components/Header";
import ShowsData from "./constants/showsData";
import FeaturedShows from "./components/FeaturedShows";
import ListOfShows from "./components/ListOfShows/ListOfShows";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
const App = () => {
  console.log(
    ShowsData.data
      .map((show) => show.type)
      .reduce(
        (acc, showType) =>
          !acc.includes(showType) ? acc.push(showType) && acc : acc,
        []
      )
  );

  const CustomLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };
  const Home = () => {
    return (
      <main>
        <FeaturedShows />
        <ListOfShows />
      </main>
    );
  };

  return (
    <BrowserRouter>
      <div
        name="JioCinema"
        className=" bg-defaultBackground text-defaultTextColor font-custom h-[1000px]"
      >
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
