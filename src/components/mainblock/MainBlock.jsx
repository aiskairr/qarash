import scss from "./MainBlock.module.scss";

function MainBlock({formRef}) {
  return (
    <div className={scss.main_w}>
      <div className={`container ${scss.cont}`}>
        <div className={scss.horseBlock}>
          <img className="animate__animated animate__backInLeft" src="/images/left_horse.png" alt="" />
          <img className="animate__animated animate__backInRight" src="/images/right_horse.png" alt="" />
          
        </div>
        
        <div className={scss.main_content}>
          <img className="animate__animated animate__backInDown" src="/images/logo-main.svg" alt="" />
          <p className="animate__animated animate__backInDown">Вклад в возрождение «Кыргызского чуда» 
            в кинематографе</p>
          <div className={scss.slider_block}>
           
            <div className={scss.blockss} style={{cursor: "pointer"}} onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth' })}>
              <div>
                <img className="animate__animated animate__backInUp" src="/images/main_elips.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.mobileHorse}>
            <img src="/images/mobilemain.svg" alt="" />
          </div>
    </div>
  )
}

export default MainBlock;
