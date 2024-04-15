import Data from "../../public/data.json";
import moviesIcon from "../../public/assets/images/icon-nav-movies.svg";
import seriesIcon from "../../public/assets/images/icon-nav-tv-series.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";
import { useState } from "react";
import { DataType } from "../types/Types";
type inputValue = {
  inputValue: string;
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
      <div className=" h-lvh bg-darkBlue">
        {filteredMovies.length >= 1 ? (
          <div className="pt-6 pl-4">
            <h1 className="text-[20px] text-white">Bookmarked Movies</h1>
          </div>
        ) : props.inputValue.length > 1 ? (
          <h1 className="text-[20px] text-white">
            {" "}
            Found {searchedMovies.length + tvSeries.length} results for '
            {props.inputValue}'
          </h1>
        ) : (
          ""
        )}
        <div className="bg-darkBlue pl-4 pr-4 ">
          <div className=" grid grid-cols-2 pt-6 gap-4">
            {searchedMovies.map((item: DataType, index) => {
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
                      src={bookmarkIconFull}
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {tvSeries.length >= 1 && props.inputValue.length < 1 ? (
          <div className="pt-6 pl-4">
            <h1 className="text-[20px] text-white">Bookmarked TV Series</h1>
          </div>
        ) : (
          ""
        )}
        <div className="bg-darkBlue pl-4 pr-4 ">
          <div className=" grid grid-cols-2 pt-6 gap-4">
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
                  <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center ">
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
    </>
  );
}
