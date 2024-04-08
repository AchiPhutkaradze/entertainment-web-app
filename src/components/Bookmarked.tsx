import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import { useState } from "react";

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

export default function Bookmarked() {
  const filteredData = Data.filter((item) => {
    return item.isBookmarked === true;
  });
  const [data, setData] = useState(filteredData);
  const removeItem = (index: number) => {
    const updateData = [...data];
    updateData.splice(index, 1);
    setData(updateData);
  };
  return (
    <div className=" h-lvh bg-darkBlue">
      <div className="bg-darkBlue pl-4 pr-4 ">
        <div className=" grid grid-cols-2 pt-6 gap-4">
          {data.map((item: dataType, index) => {
            return (
              <div key={index} className="relative">
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
                  <img
                    src={bookmarkIconFull}
                    onClick={() => removeItem(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
