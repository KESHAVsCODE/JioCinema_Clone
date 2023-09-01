import { jiocinema_logo, profile_avatar } from "../../assets/images";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between px-4 md:px-12 py-3 bg-defaultBackground  sticky top-0 left-0 right-0 z-[999]">
      <nav className="h-10 gap-4 flex">
        <ul className=" flex gap-4 items-center">
          <li>
            <i className="fa-solid fa-bars text-2xl"></i>
          </li>
          <li>
            <img
              src={jiocinema_logo}
              alt="website-logo"
              className=" cursor-pointer w-32"
            />
          </li>
          <li className="hidden xs:inline-block">
            <button className="text-premiumColor px-4 py-1 text-xs font-medium border-2 border-premiumColor rounded-3xl">
              Subscribe
            </button>
          </li>
        </ul>
        <ul className="hidden gap-4 mdl:flex items-center md text-white text-sm font-semibold">
          <li className="">
            <NavLink to="/" className="p-3 border rounded-3xl">
              For You
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="p-3 border rounded-3xl">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 border rounded-3xl">Shows</NavLink>
          </li>
          <li>
            <NavLink className="p-3 border rounded-3xl">Songs</NavLink>
          </li>
          <li>
            <NavLink className="p-3 border rounded-3xl">Premium</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="h-10 flex justify-between ">
        <ul className="flex gap-4 items-center ">
          <li className="relative">
            <input
              type="text"
              placeholder="Search"
              className="hidden lg:flex w-[220px] bg-defaultBackground px-4 py-2 border border-[#aaa] rounded-3xl outline-none focus:border-white transition-colors"
            />
            <i className="fa-solid fa-magnifying-glass text-xl lg:px-4 absolute top-1/2 right-0 transform -translate-y-1/2"></i>
          </li>

          <li className="hidden mdl:block">
            <img src={profile_avatar} alt="profile-avatar" className="w-10" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
