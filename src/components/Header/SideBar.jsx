/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { profile_avatar } from "../../assets/images";

const SideBar = ({ setSideBarVisible: { closeSideBar, sideBarRef } }) => {
  const navigate = useNavigate();
  //   const userDetails = useSelector((state) => state.signinDetails.userDetails);
  const userDetails = {};

  return (
    <section
      name="sidebar "
      className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-defaultBackground bg-opacity-90 z-[9999]"
    >
      <motion.div
        ref={sideBarRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[80%] md:w-[365px] h-full bg-defaultBackground border border-black absolute top-0 right-0"
      >
        <section
          name="user-info"
          className=" text-white h-[50px] flex items-center relative cursor-pointer hover:opacity-90"
        >
          <div
            className="flex items-center w-full"
            onClick={(e) => {
              e.stopPropagation();
              navigate(
                `${
                  userDetails?.name
                    ? (closeSideBar(), "/youraccount")
                    : "/signin"
                }`
              );
            }}
          >
            <span className="ml-9 mr-2 leading-3">
              <img src={profile_avatar} alt="profile_image" className="w-10" />
            </span>
            <p className=" text-lg font-bold flex-1">
              Hello, {userDetails?.name || "Sign In"}
            </p>
          </div>
          <span
            className="absolute text-white  -right-2 "
            onClick={closeSideBar}
            style={{ transform: "translateX(100%)" }}
          >
            <i className="fa-solid fa-x"></i>
          </span>
        </section>
        <section name="sidebar-items">
          <ul className="  overscroll-contain h-full  pt-[10px]  text-defaultTextColor">
            <li className="sideBarItems">
              <p className="">Movies</p>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </li>
            <li className="sideBarItems">
              <p className="">Subscribe Now!</p>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </li>
            <li className="sideBarItems">
              <p className="">WatchList</p>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </li>
            <li>
              <hr className="border-t border-defaultBorderColor opacity-30 my-4" />
            </li>
            <li className="sideBarItems">
              <p className="">Help & Legal</p>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </li>
            <li className="sideBarItems">
              <p className="">Sign Out</p>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </li>
          </ul>
          <span className="mx-9 text-pink text-xs font-medium border-b border-pink">
            Privacy and T&C
          </span>
        </section>
      </motion.div>
    </section>
  );
};

export default SideBar;
