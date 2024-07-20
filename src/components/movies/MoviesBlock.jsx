import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styles from './MoviesBlock.module.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'animate.css/animate.min.css';

const cards = [
  { img: "/images/movieCardImg.svg" },
  { img: "/images/movieCardImg.svg" },
  { img: "/images/movieCardImg.svg" },
  { img: "/images/movieCardImg.svg" },
  { img: "/images/movieCardImg.svg" },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  cssEase: "linear",
  className: styles.slider_w,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
  ],
};

function MoviesBlock() {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the block is in view
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.programms_wrapper} ref={blockRef}>
      <div className="container">
        <p className={styles.title_b}>Кинопоказы</p>
        <div className={styles.years_b}>
          <button>2023</button>
          <button>2024</button>
        </div>
        <div className={styles.programms_card_w}>
          <Slider {...settings} autoplay={isVisible}>
            {cards.map((el, index) => (
              <div className={`${styles.ppd} ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`} key={index}>
                <div className={styles.logos_w}>
                  <img src={el.img} alt="logos" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.ticket}>Купить билет</div>
        <img src="/images/qarlab.png" className={styles.carlab} alt="" />
        <div className={styles.blackBlock} />
      </div>
      <img className={styles.people} src="/images/moviesPeople.svg" alt="people image" />
    </div>
  );
}

export default MoviesBlock;
