import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";
import { useState } from "react";
import { DataType } from "../types/Types";

type Types = {
  inputValue: string;
  resolution: number;
};
export default function Movies(props: Types) {
  const filteredData = Data.filter((item) => {
    return item.category === "Movie" && item.isTrending !== true;
  });
  const [_dataItems, setDataItems] = useState(filteredData);
  //search functionality
  const films = filteredData.filter((item) => {
    return item.title.includes(props.inputValue);
  });
  
  const toogleBkmark = (index: number) => {
    const updateItems = [...films];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };

  return (
    <div className=" h-lvh bg-darkBlue">
      <div className="bg-darkBlue pl-4 pr-4 md:pl-[25px] md:pr-6 pb-[60px] dsk:pl-[164px] dsk:pr-[36px] dsk:pb-[53px]">
        <div className=" pt-6 md:pt[33px] dsk:pt-0">
          <h1 className="text-[20px] text-white font-normal leading-6 md:text-[32px]">
            {props.inputValue.length >= 1
              ? `Found ${films.length} results for \`${props.inputValue}\``
              : "Movies"}
          </h1>
        </div>
        <div className=" grid grid-cols-2 pt-6 gap-4 md:grid-cols-3 md:gap-y-[24px] md:gap-x-[29px] md:gap-0 dsk:grid-cols-4 dsk:pt-8 dsk:gap-y-8 dsk:gap-x-10">
          {films.map((item: DataType, index) => {
            return (
              <div key={index} className="relative">
                <div>
                  <img
                    className="w-full  rounded-lg"
                    src={
                      props.resolution < 768
                        ? item.thumbnail.regular.small
                        : item.thumbnail.regular.medium
                    }
                  />
                </div>
                <div className="flex items-center  gap-x-2 text-white opacity-textOpacity pt-2">
                  {item.year}{" "}
                  <span className="relative bottom-1 text-white text-[20px]">
                    .
                  </span>{" "}
                  <div className="flex gap-1 items-center">
                    {" "}
                    <img
                      className=" w-3 h-3"
                      src={item.category === "Movie" ? moviesIcon : seriesIcon}
                      alt=""
                    />{" "}
                    {item.category}
                  </div>
                  <span className="relative bottom-1 text-white text-[20px]">
                    .
                  </span>{" "}
                  {item.rating}
                </div>
                <div className="text-white md:text-[18px] font-normal">
                  {item.title}
                </div>
                <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center md:top-4 md:right-4 ">
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
