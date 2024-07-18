import scss from './Programms.module.scss'

let cards = [
    {
        date: "5 октября, Чт",
        desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»"
    },
    {
        date: "27 октября, Пт",
        desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»"
    },
    {
        date: "28 октября, Сб",
        desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»"
    },
    {
        date: "29 октября, Вс",
        desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»"
    },
    {
        date: "30 октября, Пн",
        desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»"
    },
]

function Programms() {
  return (
    <div className={scss.programms_wrapper}>
        <div className="container">
            <p className={scss.title_b}>Программы</p>
            <div className={scss.years_b}>
                <button>2023</button>
                <button>2024</button>
            </div>
            <div className={scss.programms_card_w}>
                {cards.map((el, index) => {
                    return (
                        <div className={scss.program_card} key={index}>
                            <div className={scss.card_inner}>
                                <div className={scss.card_front}>
                                    <p>{el.date}</p>
                                </div>
                                <div className={scss.card_back}>
                                    <div className={scss.top_anim}>
                                        <img src="/images/clapperboardtop.svg" alt="" />
                                    </div>
                                    <p className={scss.el_date}>{el.date}</p>
                                    <p>{el.desc}</p>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <img src="/images/horss_b.svg" className={scss.hors} alt="" />
            <img src="/images/qarlab.png" className={scss.carlab} alt="" />
        </div>
    </div>
  )
}

export default Programms
