import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import SliderCard from './SliderCard/SliderCard';
import scss from "./SliderBlock.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${scss.customNextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src="/images/rightarrow.svg" alt="Next" />
    </div>
  );
}

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${scss.customPrevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src="/images/leftarrow.svg" alt="Previous" />
    </div>
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};

const cards = [
    {
        desc: "Условия актерского конкурса",
        background: "#F35503",
        img: "/images/s1.png",
        backgroundImage: "/images/backs1.png"
    },
    {
        desc: "3х-дневный интенсив по актерскому мастерству",
        background: "#D9D9D9",
        img: "/images/s2.png",
        colorT: "#242424"
    },
];

function SliderBlock() {
  const sliderBlockRef = useRef(null);
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

    if (sliderBlockRef.current) {
      observer.observe(sliderBlockRef.current);
    }

    return () => {
      if (sliderBlockRef.current) {
        observer.unobserve(sliderBlockRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sliderBlockRef}
      className={`${scss.s_back} `}
    >
      <div className={scss.slider_ww + " container " + `${isInView ? "animate__animated animate__fadeInLeft" : ""}`}>
        <Slider {...settings}>
          {cards.map((el, index) => (
            <SliderCard key={index} {...el} />
          ))}
        </Slider>
      </div>
      <div className={scss.blocks}>
        <img src="/images/horses.svg" alt="Horses" />
        <div className={scss.clip}></div>
        <div className={scss.clip2}></div>
      </div>
    </div>
  )
}

export default SliderBlock;
