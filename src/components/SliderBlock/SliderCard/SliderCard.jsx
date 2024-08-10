import scss from "./SliderCard.module.scss"

function SliderCard({desc, background, img,backgroundImage, colorT, openModal}) {
    console.log(background);
  return (
    <div className={scss.card_w} style={{backgroundColor: `${background}`, backgroundImage: `url("${backgroundImage}")`}}>
        <div className={scss.left_w}>
            <p className={scss.title} style={{color: `${colorT}`}}>{desc}</p>
            <p className={scss.sub_title}>Срок: до 10 сеньября 2024г.</p>
            <button onClick={openModal}>Подробнее</button>
        </div>
        <div className={scss.right_w}>
            <img src={img} alt="s_image" />
            <button onClick={openModal}>Подробнее</button>
        </div>
    </div>
  )
}

export default SliderCard