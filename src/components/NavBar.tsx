import mainIcon from "../../public/assets/images/film-icon.svg";
import avatar from "../../public/assets/images/image-avatar.png";
import homeIcon from "../../public/assets/images/icon-nav-home.svg";
import movieIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-nav-bookmark.svg";
import searchIcon from "../../public/assets/images/search-icon.svg";
import FullHomeIcon from "../../public/assets/images/icon-home-full.svg";
import { Link, useLocation } from "react-router-dom";
export default function NavBar(props: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <>
      <div className="bg-darkBlue">
        <div className="flex items-center bg-bgNavBar relative">
          <div className="absolute left-4">
            <img src={mainIcon} />
          </div>
          <nav className="h-14 w-full justify-center">
            <ul className="flex gap-x-6 justify-center pt-5 items-center">
              <Link to={"/home"}>
                <li>
                  {" "}
                  <img
                    src={locationPath !== "/home" ? homeIcon : FullHomeIcon}
                  />
                </li>
              </Link>
              <Link to={"/movies"}>
                <li>
                  <img src={movieIcon} />
                </li>
              </Link>
              <Link to={"/series"}>
                <li>
                  <img src={seriesIcon} />
                </li>
              </Link>
              <Link to={"/bookmark"}>
                <li>
                  <img src={bookmarkIcon} />
                </li>
              </Link>
            </ul>
          </nav>
          <div className=" w-6 h-6 absolute right-4">
            <img src={avatar} />
          </div>
        </div>
        <div className="flex gap-4 mt-6 pl-4 pb-6">
          <img src={searchIcon} />
          <input
            type="text"
            onChange={(e) => props.setInputValue(e.target.value)}
            placeholder="Search for movies or TV series"
            className=" outline-none bg-darkBlue text-white"
          />
        </div>
      </div>
    </>
  );
}
