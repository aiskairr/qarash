import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from "./VideoPlayer.module.scss";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    className: styles.slider_w
};

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsPlaying(!isPlaying);
    };

    const data = [
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
        { img: "/images/qarashSliderText.svg",  img2: "/images/qarashTextFull.svg"},
    ]

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.textOverlayTop}>
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                </div>
                <div className={styles.container}>
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
                            <img src='/images/playIcon.svg' alt='play' />
                        </div>
                    </div>
                    <img className={styles.sideText} src='/images/qarashText.svg' alt='QARASH LAB Left' />
                </div>
                <div className={styles.textOverlay}>
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                    <img src='/images/qarashText.svg' alt='QARASH LAB Bottom' />
                </div>
                <div className={styles.logos_slider__wrap}>
                <Slider {...settings}>
                    {data.map((el) => {
                        return (
                            <div className={styles.ppd}>
                                <div className={styles.logos_w}>
                                    <img src={el.img} alt="logos" />
                                    <img src={el.img2} alt="logos" />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            </div>
           
        </>
    );
}

export default VideoPlayer;