import data from "../../public/data.json";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function TrendingSlider() {
  const [trending, _setTrending] = useState(
    data.filter((item) => {
      return item.thumbnail.trending?.small;
    })
  );

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    variableWidth: false,
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
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
