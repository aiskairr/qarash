import scss from "./MainBlock.module.scss";

function MainBlock({formRef}) {
  return (
    <div className={scss.main_w}>
      <img src="/images/backm.png" alt="" />
      <div className={`container ${scss.cont}`}>
        <div className={scss.horseBlock}>
          <img className="animate__animated animate__fadeInUp" src="/images/left_horse.png" alt="" />
          <img className="animate__animated animate__fadeInUp" src="/images/right_horse.png" alt="" />
          
        </div>
        
        <div className={scss.main_content}>
          <img className="animate__animated animate__fadeInUp" src="/images/logo-main.svg" alt="" />
          <p className="animate__animated animate__fadeInUp">Лаборатория кино 4-6 октября 2024</p>
          <div className={scss.ref_block} onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <button>Стать участником</button>
            <img src="/images/arrrow_bottom.svg" alt="" />
          </div>
          <div className={scss.slider_block}>
           
            <div className={scss.blockss} style={{cursor: "pointer"}} onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth' })}>
              <div>
                <img src="/images/circle.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.mobileHorse}>
            <img src="/images/mobilemain.svg" alt="" />
          </div>
          <div className={scss.gra}></div>
    </div>
  )
}

export default MainBlock;
