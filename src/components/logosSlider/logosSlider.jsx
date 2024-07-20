import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import scss from "./logosSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  className: scss.slider_w,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const logos = [
  { img: "/images/1logo.svg" },
  { img: "/images/2logo.svg" },
  { img: "/images/3logo.png" },
  { img: "/images/4logo.svg" },
  { img: "/images/5logo.svg" },
  { img: "/images/6logo.svg" },
  { img: "/images/7logo.svg" },
  { img: "/images/8logo.svg" },
  { img: "/images/9logo.svg" },
];

function LogosSlider() {
  const sliderRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after animation trigger
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={`${scss.logos_slider__wrap} ${
        isInView ? "animate__animated animate__fadeIn" : ""
      }`}
    >
      <Slider {...settings}>
        {logos.map((el, index) => (
          <div key={index} className={scss.ppd}>
            <div className={scss.logos_w}>
              <img src={el.img} alt="logos" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LogosSlider;
