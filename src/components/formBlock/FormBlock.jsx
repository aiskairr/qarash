import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import scss from "./FormBlock.module.scss";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'animate.css/animate.min.css';

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
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
};

const logos = [
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" },
  { img: "/images/log1.svg" }
];

function FormBlock() {
  const [mainImage, setMainImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  const handleFiles = (files) => {
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      setMainImage(URL.createObjectURL(files[0]));
    }
    if (files.length > 1) {
      const otherImagesArray = [];
      for (let i = 1; i < files.length; i++) {
        if (files[i].type.startsWith("image/")) {
          otherImagesArray.push(URL.createObjectURL(files[i]));
        }
      }
      setOtherImages(otherImagesArray);
    }
  };

  const handleChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

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
    <div
      className={`${scss.form_w}`}
      ref={blockRef}
    >
      <form className="container">
        <img className={` ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`} src="/images/form_img.svg" alt="" />
        <div>
          <div className={scss.form}>
            <p className={scss.title}>Регистрация участника</p>
            <input type="text" placeholder="Введите свое имя " />
            <input type="text" placeholder="Введите свой номер " />
            <input type="text" placeholder="Введите свой Email" />
            <input type="submit" value="Зарегистрироваться" />
          </div>
        </div>
        <div className={scss.img_upload + ` ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
          <div>
            <input
              type="file"
              id="fileInput"
              multiple
              name="file"
              hidden
              onChange={handleChange}
            />
            <div
              className="uploader"
              id="fileSelect"
              onClick={handleClick}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div id="content" className="content">
                {mainImage ? (
                  <img src={mainImage} alt="Main" className="uploaded-img" />
                ) : (
                  <p id="content-action">Загрузить видео</p>
                )}
              </div>
            </div>
            <div id="oit" className="other-image-thumbnails">
              {otherImages.map((image, index) => (
                <div key={index} id="img-list">
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="img-thumb"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src="/images/horss_b.svg" className={scss.hors} alt="" />
      </form>
      <div className={scss.nonImg_w}>
        <img className={scss.nonImg} src="/images/form_img.svg" alt="" />
      </div>
      <div className={scss.lineb}>
        <img src="/images/line_b.png" alt="" />
      </div>
      <div className={`${scss.logos_slider__wrap} ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
        <Slider {...settings}>
          {logos.map((el, index) => (
            <div className={scss.ppd} key={index}>
              <div className={scss.logos_w}>
                <img src={el.img} alt="logos" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FormBlock;
