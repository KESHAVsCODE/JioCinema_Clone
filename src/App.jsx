import Header from "./components/Header";
import FeaturedShows from "./components/FeaturedShows";
import ListOfShows from "./components/ListOfShows/ListOfShows";
import MediaShowcase from "./components/MediaShowcase";
import ShowType from "./components/ShowType";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
const App = () => {
  const CustomLayout = () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  const Home = () => {
    return (
      <>
        <FeaturedShows />
        <ListOfShows />
      </>
    );
  };

  return (
    <BrowserRouter>
      <div
        name="JioCinema"
        className="min-h-[100vh] bg-defaultBackground text-defaultTextColor font-custom"
      >
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
            <Route path=":show_type" element={<ShowType />} />
            <Route
              path=":show_type/:show_title/:id"
              element={<MediaShowcase />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
