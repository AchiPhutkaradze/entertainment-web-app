import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";
import { useState } from "react";
import { DataType } from "../types/Types";

export default function Series() {
  const filteredData = Data.filter((item) => {
    return item.category === "TV Series" && item.isTrending !== true;
  });
  const [dataItems, setDataItems] = useState(filteredData);

  const toogleBkmark = (index: number) => {
    const updateItems = [...dataItems];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };

  return (
    <div className=" h-lvh bg-darkBlue">
      <div className="bg-darkBlue pl-4 pr-4 ">
        <div className=" pt-6">
          <h1 className="text-[20px] text-white font-normal leading-6">
            TV Series{" "}
          </h1>
        </div>
        <div className=" grid grid-cols-2 pt-6 gap-4">
          {filteredData.map((item: DataType, index) => {
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
                    onClick={() => toogleBkmark(index)}
                    src={
                      item.isBookmarked === true
                        ? bookmarkIconFull
                        : bookmarkIcon
                    }
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
