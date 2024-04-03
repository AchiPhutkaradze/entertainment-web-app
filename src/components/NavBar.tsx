import mainIcon from "../assets/images/film-icon.svg";
import avatar from "../assets/images/image-avatar.png";
import homeIcon from "../assets/images/icon-nav-home.svg";
import movieIcon from "../assets/images/icon-nav-movies.svg";
import seriesIcon from "../assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/images/icon-nav-bookmark.svg";

export default function NavBar() {
  return (
    <div className="bg-bgNavBar flex items-center  relative">
      <div className="absolute left-4">
        <img src={mainIcon} />
      </div>
      <nav className="h-14 w-full justify-center">
        <ul className="flex gap-x-6  items-center pt-5">
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
  );
}
