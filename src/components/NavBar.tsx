import mainIcon from "../../public/assets/images/film-icon.svg";
import avatar from "../../public/assets/images/image-avatar.png";
import homeIcon from "../../public/assets/images/icon-nav-home.svg";
import movieIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-nav-bookmark.svg";
import searchIcon from "../../public/assets/images/search-icon.svg";
import FullHome from "../../public/assets/images/icon-home-full.svg";
import FullMovies from "../../public/assets/images/icon-category-movie-full.svg";
import FullTvSeries from "../../public/assets/images/icon-category-tv-full.svg";
import FullBookmark from "../../public/assets/images/icon-bookmark-full.svg";

import { Link, useLocation } from "react-router-dom";
export default function NavBar(props: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <>
      <div className="bg-darkBlue">
        <div className="flex items-center bg-bgNavBar relative md:mt-[23px] md:ml-6 md:mr-6 md:rounded-md dsk:h-[960px] dsk:w-[100px] dsk:absolute dsk:z-10 dsk:rounded-3xl dsk:left-8 dsk:top-8 dsk:m-0">
          <div className="absolute left-4 dsk:top-[35px] dsk:left-8">
            <img src={mainIcon} />
          </div>
          <nav className="h-14 w-full justify-center md:h-[72px] md:flex dsk:flex dsk:absolute dsk:top-[136px]">
            <ul className="flex gap-x-6 justify-center pt-5 items-center md:pt-0 dsk:pt-0 dsk:flex-col dsk:gap-10 dsk:h-[200px]">
              <Link to={"/home"}>
                <li>
                  {" "}
                  <img
                    className="w-5 h-5"
                    src={locationPath !== "/home" ? homeIcon : FullHome}
                  />
                </li>
              </Link>
              <Link to={"/movies"}>
                <li>
                  <img
                    className="w-5 h-5"
                    src={locationPath === "/movies" ? FullMovies : movieIcon}
                  />
                </li>
              </Link>
              <Link to={"/series"}>
                <li>
                  <img
                    className="w-5 h-5"
                    src={locationPath === "/series" ? FullTvSeries : seriesIcon}
                  />
                </li>
              </Link>
              <Link to={"/bookmark"}>
                <li>
                  <img
                    className="w-5 h-5"
                    src={
                      locationPath === "/bookmark" ? FullBookmark : bookmarkIcon
                    }
                  />
                </li>
              </Link>
            </ul>
          </nav>
          <div className=" w-6 h-6 absolute right-4 md:w-8 dsk:bottom-8 dsk:right-8 dsk:w-10">
            <img src={avatar} />
          </div>
        </div>
        <div className="flex gap-4 mt-6 pl-4 pb-6 md:mt-[33px] md:pl-[25px] dsk:pl-[164px] dsk:pt-16 dsk:mt-0">
          <img className="md:w-[32px]" src={searchIcon} />
          <input
            type="text"
            onChange={(e) => props.setInputValue(e.target.value)}
            placeholder="Search for movies or TV series"
            className=" outline-none bg-darkBlue text-white font-extralight	md:text-[24px] min-w-[241px] md:min-w-[321px]"
          />
        </div>
      </div>
    </>
  );
}
