import data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import { useState } from "react";
import { DataType } from "../types/Types";
import TrendingSlider from "./TrendingSlider";

export default function Home(props: { inputValue: string }) {
  const filteredData: DataType[] = data.filter(
    (item) => item.isTrending === false
  );

  const [dataItems, setDataItems] = useState(filteredData);

  //function for add film to bookmark
  const toogleBkmark = (index: number) => {
    const updateItems = [...dataItems];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };

  const searchResult = filteredData.filter((item) => {
    return item.title.includes(props.inputValue);
  });
  console.log(searchResult);
  return (
    <>
      {props.inputValue.length < 1 && <TrendingSlider />}
      <div className="pl-4 pt-6 pr-6">
        <div>
          <h2 className=" font-normal text-white text-[20px] leading-6 whitespace-nowrap	">
            {props.inputValue.length === 0
              ? "Recommended for you"
              : `Found ${searchResult.length} results for \`${props.inputValue}\``}
          </h2>
        </div>
        <div className="">
          <div className=" grid grid-cols-2 pt-6 gap-4">npm 
            {searchResult.map((item: DataType, index) => {
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
                        src={
                          item.category === "Movie" ? moviesIcon : seriesIcon
                        }
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
    </>
  );
}
