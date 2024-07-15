import Slider from 'react-slick'
import SliderCard from './SliderCard/SliderCard';
import scss from "./SliderBlock.module.scss"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
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
  ]

function SliderBlock() {
  return (
    <div className={scss.s_back}>
        <div className={scss.slider_ww + " container"}>
        <Slider {...settings}>
            {cards.map((el, index) => {
                return <SliderCard key={index} {...el} />
            })}
        </Slider>
    </div>
    <div className={scss.blocks}>
    <img src="/images/horses.svg" alt="" />

      <div className={scss.clip}>
      </div>
      <div className={scss.clip2}></div>

      </div>
    </div>
  )
}

export default SliderBlock