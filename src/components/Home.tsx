import data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";

type ThumbnailType = {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
};
type dataType = {
  title: string;
  thumbnail: ThumbnailType;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

export default function Home() {
  const filteredData: dataType[] = data.filter(
    (item) => item.isTrending === false
  );
  return (
    <div className="pl-4 pt-6 pr-6 bg-darkBlue">
      <div>
        <h2 className=" font-normal text-white text-[20px] leading-6 whitespace-nowrap	">
          Recommended for you
        </h2>
      </div>
      <div className=" grid grid-cols-2 pt-6 gap-4">
        {filteredData.map((item: dataType) => {
          return (
            <div key={item.title} className="relative">
              <div>
                <img
                  className="w-full  rounded-lg"
                  src={item.thumbnail.regular.small}
                />
              </div>
              <div className="flex items-center  gap-x-2 text-white opacity-textOpacity pt-2">
                {item.year} .{" "}
                <div className="flex gap-1 items-center">
                  {" "}
                  <img
                    className=" w-3 h-3"
                    src={item.category === "Movie" ? moviesIcon : seriesIcon}
                    alt=""
                  />{" "}
                  {item.category}
                </div>
                . {item.rating}
              </div>
              <div className="text-white">{item.title}</div>
              <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center ">
                <img src={bookmarkIcon} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
