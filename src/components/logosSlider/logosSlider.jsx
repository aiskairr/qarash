import Slider from "react-slick";
import scss from "./logosSlider.module.scss";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  className: scss.slider_w
};
const logos = [
  {
    img: "/images/1logo.svg",
  },
  {
    img: "/images/2logo.svg",
  },
  {
    img: "/images/3logo.png",
  },
  {
    img: "/images/4logo.svg",
  },
  {
    img: "/images/5logo.svg",
  },
  {
    img: "/images/6logo.svg",
  },
  {
    img: "/images/7logo.svg",
  },
  {
    img: "/images/8logo.svg",
  },
  {
    img: "/images/9logo.svg",
  }
];
function LogosSlider() {
  return (
    <div className={scss.logos_slider__wrap}>
      <Slider {...settings}>
        {logos.map((el) => {
            return (
                <div className={scss.ppd}>
                    <div className={scss.logos_w}>
                    <img src={el.img} alt="logos" />
                </div>
                </div>
            )
        })}
      </Slider>
    </div>
  );
}

export default LogosSlider;
