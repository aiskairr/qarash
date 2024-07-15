import scss from "./SliderCard.module.scss"

function SliderCard({desc, background, img,backgroundImage, colorT}) {
    console.log(background);
  return (
    <div className={scss.card_w} style={{backgroundColor: `${background}`, backgroundImage: `url("${backgroundImage}")`}}>
        <div className={scss.left_w}>
            <p className={scss.title} style={{color: `${colorT}`}}>{desc}</p>
            <button>Подробнее</button>
        </div>
        <div className={scss.right_w}>
            <img src={img} alt="s_image" />
        </div>
    </div>
  )
}

export default SliderCard