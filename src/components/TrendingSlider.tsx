import data from "../../public/data.json";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";
import bookmarkIconFull from "../../public/assets/images/icon-bookmark-full.svg";

export default function TrendingSlider(props: { resolution: number }) {
  const trending = data.filter((item) => {
    return item.thumbnail.trending?.small;
  });

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          dots: false,
          infinite: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          autoplay: false,
          cssEase: "linear",
          arrows: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          dots: false,
          infinite: false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          autoplay: false,
          cssEase: "linear",
          arrows: false,
          variableWidth: false,
        },
      },
    ],
  };
  const [_dataItems, setDataItems] = useState(trending);

  const toogleBkmark = (index: number) => {
    const updateItems = [...trending];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };
  return (
    <>
      <div className="overflow-hidden bg-darkBlue pl-4 pt-6 dsk:ml-[165px] dsk:pl-0 dsk:pt-[34px]">
        <div className="pb-5 md:pb-[25px]">
          <h1 className="text-white size-5 leading-6 md:text-[32px] font-extralight	">
            Trending
          </h1>
        </div>
        <Slider {...settings}>
          {trending.map((item, index) => (
            <div className="overflow-hidden rounded-lg relative" key={index}>
              <img
                className="w-full rounded-lg md:max-h-[295px] lg:h-[350px] dsk:min-h-[250px] dsk:max-h-[350px]"
                src={
                  props.resolution < 768
                    ? item.thumbnail.trending?.small
                    : item.thumbnail.trending?.large
                }
              />
              <div className="absolute bottom-4 left-4 md:left-6 md:bottom-6">
                <div className="text-white">
                  {item.year} . {item.category} . {item.rating}
                </div>
                <div className="text-white md:text-[24px]">{item.title}</div>
              </div>
              <div
                onClick={() => toogleBkmark(index)}
                className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center md:top-4 md:right-6 "
              >
                <img
                  src={
                    item.isBookmarked === true ? bookmarkIconFull : bookmarkIcon
                  }
                />{" "}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
