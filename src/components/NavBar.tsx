import mainIcon from "../../public/assets/images/film-icon.svg";
import avatar from "../../public/assets/images/image-avatar.png";
import homeIcon from "../../public/assets/images/icon-nav-home.svg";
import movieIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-nav-bookmark.svg";
import searchIcon from "../../public/assets/images/search-icon.svg";
import TrendingSlider from "./TrendingSlider";
export default function NavBar() {
  return (
    <>
      <div className="bg-darkBlue">
        <div className="flex items-center bg-bgNavBar relative">
          <div className="absolute left-4">
            <img src={mainIcon} />
          </div>
          <nav className="h-14 w-full justify-center">
            <ul className="flex gap-x-6 justify-center pt-5">
              <li>
                {" "}
                <img src={homeIcon} />
              </li>
              <li>
                <img src={movieIcon} />
              </li>
              <li>
                <img src={seriesIcon} />
              </li>
              <li>
                <img src={bookmarkIcon} />
              </li>
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
            placeholder="Search for movies or TV series"
            className=" outline-none bg-darkBlue text-white"
          />
        </div>
      </div>
      <TrendingSlider />
    </>
  );
}
