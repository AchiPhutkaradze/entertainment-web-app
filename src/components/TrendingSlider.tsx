import data from "../../public/data.json";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookmarkIcon from "../../public/assets/images/icon-bookmark-empty-.svg";

export default function TrendingSlider() {
  const [trending, _setTrending] = useState(
    data.filter((item) => {
      return item.thumbnail.trending?.small;
    })
  );
  const settings = {
    responsive: [
      {
        breakpoint: 700,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="overflow-hidden bg-darkBlue pl-4">
        <div className="pb-5">
          <h1 className="text-white size-5 leading-6">Trending</h1>
        </div>
        <Slider {...settings}>
          {trending.map((item, index) => (
            <div className="overflow-hidden rounded-lg relative" key={index}>
              <img
                className="w-full rounded-lg"
                src={item.thumbnail.trending?.small}
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-white">
                  {item.year} . {item.category} . {item.rating}
                </div>
                <div className="text-white">{item.title}</div>
              </div>
              <div className="w-8 h-8 bg-darkBlue opacity-circleOpacity absolute top-2 right-2 rounded-2xl flex items-center justify-center ">
                <img src={bookmarkIcon}  />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
