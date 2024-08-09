import { useEffect, useRef, useState } from "react";
import scss from "./SocBlock.module.scss";
// import "animate.css/animate.min.css";

function SocBlock() {
  const socWrapperRef = useRef(null);
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

    if (socWrapperRef.current) {
      observer.observe(socWrapperRef.current);
    }

    return () => {
      if (socWrapperRef.current) {
        observer.unobserve(socWrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={socWrapperRef}
      className={`${scss.soc_wrapper} `}
    >
      <div className={scss.soc_top__w}>
        <img src="/images/topis.svg" alt="topis" />
        <div className={scss.marquee + " container"}>
          <p className={scss.w_thr}>Наша миссия</p>

          <p className={scss.cr}>
          Внести вклад в возрождение “Кыргызского чуда”  в кинематографе</p>
          </div>
      </div>
      <div className={scss.soc_bot__w + " container"}>
        <div className={`${
        isInView ? "animate__animated animate__fadeInUp" : ""
      }`}>
          <p className={scss.w_thr}>Задачи</p>
          <p>
          Исходя из реалий и требований современной киноиндустрии, где при создании и продвижении кинопроектов создатели все чаще сталкиваются с вызовами современного глобального бизнеса, сеть кинотеатров СИНЕМАТИКА создала площадку QARASH LAB, на которой соберутся кинематографисты с Франции, Кореи, России, Казахстана и Кыргызстана для того, чтобы коммуницировать, делиться опытом и созидать.
          </p>
          <div className={scss.imgg}>
            <img src="/images/eyes.png" alt="" />
          </div>
        </div>
        <div className={scss.r_block + ` ${
        isInView ? "animate__animated animate__fadeInUp" : ""
      }`}>
          <div>
            <p>
              Объединить в единое целое целое КИНО И БИЗНЕС: повысить знания в
              кинобизнесе, кинопроизводстве и продвижении кинопроектов{" "}
            </p>
          </div>
          <div>
            <p>Поддержать и продвигать творчество молодых кинематографистов </p>
          </div>
          <div>
            <p>
              Обратить внимание на важность и необходимость всех профессий,
              которые участвуют в кинопроизводстве{" "}
            </p>
          </div>
          <div>
            <p>
              Дать возможность проработать творческие проекты с передовыми
              профессионалами современной киноиндустрии стран-участниц{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={scss.blocks}>
        <div className={scss.clip}>
          <img src="/images/horses.svg" alt="" />
        </div>
        <div className={scss.clip2}></div>
      </div>
    </div>
  );
}

export default SocBlock;
