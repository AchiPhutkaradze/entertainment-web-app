import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import { useState } from "react";
import { DataType } from "../types/Types";
type inputValue = {
  inputValue: string;
  resolution: number;
};
export default function Bookmarked(props: inputValue) {
  // filtered movies
  const filteredMovies = Data.filter((item) => {
    return item.isBookmarked === true && item.category === "Movie";
  });
  const [_moviesData, setMoviesData] = useState(filteredMovies);

  //search functionality movies
  const searchedMovies = filteredMovies.filter((item) => {
    return item.title.includes(props.inputValue);
  });

  // Function to remove a movie from the list
  const removeItem = (index: number) => {
    const updatedMovies = [...searchedMovies];
    updatedMovies[index].isBookmarked = false;
    setMoviesData(updatedMovies);
  };

  // filtered Tv series
  const filteredSeries = Data.filter((item) => {
    return item.isBookmarked === true && item.category === "TV Series";
  });
  const [_SeriesData, setSeriesData] = useState(filteredSeries);

  //search functionality for tv series
  const tvSeries = filteredSeries.filter((item) => {
    return item.title.includes(props.inputValue);
  });
  //remove functionality for tv series
  const removeSeries = (index: number) => {
    const updatedSeries = [...tvSeries];
    updatedSeries[index].isBookmarked = false;
    setSeriesData(updatedSeries);
  };
  return (
    <>
      <div>
        <div className=" h-lvh bg-darkBlue">
          {searchedMovies.length >= 1 && props.inputValue.length === 0 ? (
            <div className="pt-6 pl-4 md:pl-[25px] md:pr-[24px">
              <h1 className="text-[20px] text-white md:text-[32px]">
                Bookmarked Movies
              </h1>
            </div>
          ) : props.inputValue.length >= 1 ? (
            <div className="pl-4 pt-6 md:pl-[25px] md:pr-[24px">
              <h1 className="text-[20px] text-white md:text-[32px]">
                {" "}
                Found {searchedMovies.length + tvSeries.length} results for '
                {props.inputValue}'
              </h1>
            </div>
          ) : (
            ""
          )}
          <div className="bg-darkBlue pl-4 pr-4 md:pl-[25px] md:pr-[24px] ">
            <div className="grid grid-cols-2 pt-6 gap-4 md:grid-cols-3 md:gap-y-[24px] md:gap-x-[29px] md:gap-0">
              {searchedMovies.map((item: DataType, index) => {
                return (
                  <div key={index} className="relative">
                    <div>
                      <img
                        className="w-full rounded-lg"
                        src={item.thumbnail.regular.small}
                      />
                    </div>
                    <div className="flex items-center  gap-x-2 text-white opacity-textOpacity pt-2">
                      {item.year} .{" "}
                      <div className="flex gap-1 items-center">
                        {" "}
                        <img
                          className="w-3 h-3"
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
                    <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center md:top-4 md:right-4 ">
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
          {tvSeries.length >= 1 && props.inputValue.length === 0 && (
            <div className="pt-6 pl-4 md:pl-[25px] md:pr-[24px">
              <h1 className="text-[20px] text-white md:text-[32px]">
                Bookmarked Movies
              </h1>
            </div>
          )}
          <div className="bg-darkBlue pl-4 pr-4 md:pl-[25px] md:pr-[24px ">
            <div className=" grid grid-cols-2 pt-6 gap-4 md:grid-cols-3 md:gap-y-[24px] md:gap-x-[29px] md:gap-0">
              {tvSeries.map((item: DataType, index) => {
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
                    <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center md:top-4 md:right-4 ">
                      <img
                        src={bookmarkIconFull}
                        onClick={() => removeSeries(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
