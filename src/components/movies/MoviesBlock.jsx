import styles from "./MoviesBlock.module.scss";
import Slider from "react-slick";

let cards = [
{img:"/images/movieCardImg.svg"},
{img:"/images/movieCardImg.svg"},
{img:"/images/movieCardImg.svg"},
{img:"/images/movieCardImg.svg"},
{img:"/images/movieCardImg.svg"},
]

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    className: styles.slider_w,
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
    autoplay: false,
    speed: 1000,


          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
    speed: 1000,

    autoplay: false,

          }
        }
      ]
  };

function MoviesBlock() {
    return (
        <div className={styles.programms_wrapper}>
            <div className="container">
                <p className={styles.title_b}>Кинопоказы</p>
                <div className={styles.years_b}>
                    <button>2023</button>
                    <button>2024</button>
                </div>
                <div className={styles.programms_card_w}>
                    <Slider {...settings}>
                        {cards.map((el) => {
                            return (
                              <div className={styles.ppd}>
                                    <div className={styles.logos_w}>
                                        <img src={el.img} alt="logos" />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className={styles.ticket}>Купить билет</div>
                <img src="/images/qarlab.png" className={styles.carlab} alt="" />
                <div className={styles.blackBlock} />
            </div>
            <img className={styles.people} src="/images/moviesPeople.svg" alt="people image" />
        </div>
    )
}

export default MoviesBlock;
