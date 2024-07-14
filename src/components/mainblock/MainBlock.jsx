import scss from "./MainBlock.module.scss";

function MainBlock() {
  return (
    <div className={scss.main_w}>
      <div className={`container ${scss.cont}`}>
        <div className={scss.horseBlock}>
          <img src="/images/left_horse.png" alt="" />
          <img src="/images/right_horse.png" alt="" />
        </div>
        <div className={scss.main_content}>
          <img src="/images/logo-main.svg" alt="" />
          <p>Вклад в возрождение «Кыргызского чуда» 
            в кинематографе</p>
          <div className={scss.slider_block}>
            <div className={scss.blockss}>
              <div className={scss.circle}></div>
              <div className={scss.circle}></div>
              <div className={scss.circle}></div>
              <div className={scss.circle}></div>
              <div className={scss.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlock;
