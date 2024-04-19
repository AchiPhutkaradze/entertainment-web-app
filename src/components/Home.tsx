import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import { useState } from "react";
import { DataType } from "../types/Types";
import TrendingSlider from "./TrendingSlider";

export default function Home(props: {
  inputValue: string;
  resolution: number;
}) {
  const data: DataType[] = Data.filter((item) => item.isTrending === false);

  const [dataItems, setDataItems] = useState(data);

  //function for add film to bookmark
  const toogleBkmark = (index: number) => {
    const updateItems = [...dataItems];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };
  //search functionality
  const filteredData = data.filter((item) => {
    return item.title.includes(props.inputValue);
  });
  return (
    <>
      {props.inputValue.length < 1 && (
        <TrendingSlider resolution={props.resolution} />
      )}
      <div className="pl-4 pt-6 pr-6 md:pt-[39px] md:pl-[25px] md:pr-6 pb-[61px] md:pb-[56px] dsk:pl-[165px] dsk:pr-[36px]">
        <div>
          <h2 className="  text-white text-[20px] leading-6 whitespace-nowrap md:text-[32px] font-light">
            {props.inputValue.length === 0
              ? "Recommended for you"
              : `Found ${filteredData.length} results for \`${props.inputValue}\``}
          </h2>
        </div>
        <div className=" grid grid-cols-2 pt-6 gap-4 md:grid-cols-3 md:gap-y-[24px] md:gap-x-[29px] md:gap-0 dsk:grid-cols-4 dsk:pt-8 dsk:gap-y-8 dsk:gap-x-10">
          {filteredData.map((item: DataType, index) => {
            return (
              <div key={index} className="relative">
                <div>
                  <img
                    className="w-full  rounded-lg"
                    src={
                      props.resolution < 768
                        ? item.thumbnail.regular.small
                        : props.resolution > 1440
                        ? item.thumbnail.regular.large
                        : item.thumbnail.regular.medium
                    }
                  />
                </div>
                <div className="flex items-center gap-x-2 text-white opacity-textOpacity pt-2">
                  {item.year}{" "}
                  <span className="relative bottom-1 text-white text-[20px]">
                    .
                  </span>{" "}
                  <div className="flex gap-1 items-center">
                    {" "}
                    <img
                      className="w-3 h-3"
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
    </>
  );
}
