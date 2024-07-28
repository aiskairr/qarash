import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from "./VideoPlayer.module.scss";
import Slider from "react-slick";
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
    className: styles.slider_w,
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

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const videoPlayerRef = useRef(null);

    const handlePlayButtonClick = () => {
        setIsPlaying(!isPlaying);
    };

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

        if (videoPlayerRef.current) {
            observer.observe(videoPlayerRef.current);
        }

        return () => {
            if (videoPlayerRef.current) {
                observer.unobserve(videoPlayerRef.current);
            }
        };
    }, []);

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
        { img: "/images/log1.svg" },
    ];

    return (
        <div
            ref={videoPlayerRef}
            className={`${styles.wrapper}`}
        >
            <div className={styles.textOverlayTop }>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
            </div>
            <div className={styles.container + `  ${isInView ? "animate__animated animate__fadeInUp" : ""}`}>
                <img className={styles.sideTextRight} src='/images/qarashText.svg' alt='QARASH LAB Right' />
                <div className={styles.videoFrame}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=BxAkq9d6M-M'
                        className={styles.reactPlayer}
                        width='100%'
                        height='100%'
                        controls={true}
                        playing={isPlaying}
                    />
                    <div className={styles.playerButton} onClick={handlePlayButtonClick}>
                        <div>
                        <img src='/images/playIcon.svg' alt='play' />

                        </div>
                    </div>
                    <div className={styles.c_w}>
                    <div className={styles.circle_b}></div>

                    </div>
                </div>
                <img className={styles.sideText} src='/images/qarashText.svg' alt='QARASH LAB Left' />
            </div>
            <div className={styles.textOverlay }>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
                <div><img src='/images/qa.svg' alt='QARASH LAB Bottom' /></div>
            </div>
            <div style={{ width: '100%' }}>
                <div className={styles.logos_slider__wrap}>
                    <Slider {...settings}>
                        {logos.map((el, index) => (
                            <div className={styles.ppd} key={index}>
                                <div className={styles.logos_w}>
                                    <img src={el.img} alt="logos" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
