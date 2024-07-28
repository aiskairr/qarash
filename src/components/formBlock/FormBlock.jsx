import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import scss from "./FormBlock.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';
import emailjs from 'emailjs-com';
import { storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loader from "../Loader/Loader";

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
  const [videoPreview, setVideoPreview] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);
  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showLoader, setShowLoader] = useState(false); // Состояние для показа прелоадера

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
    if (files.length > 0 && files[0].type.startsWith("video/")) {
      setVideo(files[0]);
      setVideoPreview(URL.createObjectURL(files[0]));
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
      { threshold: 0.1 }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true); // Показываем прелоадер
    if (video) {
      const storageRef = ref(storage, `videos/${video.name}`);
      const uploadTask = uploadBytesResumable(storageRef, video);

      setUploading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed", error);
          setUploading(false);
          setShowLoader(false); // Скрываем прелоадер
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            sendEmail(downloadURL);
          });
        }
      );
    } else {
      sendEmail();
    }
  };

  const sendEmail = (videoURL = '') => {
    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      video_url: videoURL
    };

    emailjs.send('service_9sa8ts7', 'template_1suctaq', templateParams, 'b1U4VKwjsVjUVlshn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setPhone('');
        setEmail('');
        setVideo(null);
        setVideoPreview(null);
        setUploading(false);
        setShowLoader(false); // Скрываем прелоадер
      }, (error) => {
        console.log('FAILED...', error);
        setUploading(false);
        setShowLoader(false); // Скрываем прелоадер
      });
  };
  return (
    <div
      className={`${scss.form_w}`}
      ref={blockRef}
    >
      <form className="container" onSubmit={handleSubmit} ref={formRef}>
        {showLoader && <Loader />}
        <img className={` ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`} src="/images/form_img.svg" alt="" />
        <div>
          <div className={scss.form}>
            <p className={scss.title}>Регистрация участника 
            на актерский конкурс</p>
            <input
              type="text"
              placeholder="Введите свое имя"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Введите свой номер"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Введите свой Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="submit" value="Зарегистрироваться" disabled={uploading} className={scss.reg__pc} />
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
                {videoPreview ? (
                  <video controls src={videoPreview} className="uploaded-img"></video>
                ) : mainImage ? (
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
        <div className={scss.reg__phone__cont}>
          <input type="submit" value="Зарегистрироваться" disabled={uploading} className={scss.reg__phone} />
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