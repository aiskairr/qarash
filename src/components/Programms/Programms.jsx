import React, { useEffect, useRef, useState } from 'react';
import scss from './Programms.module.scss';
import 'animate.css/animate.min.css';
import Modal from '../Modal/Modal';
import ModalProgramms from '../ModalProgramms/ModalProgramms';

const cards23 = [
  {
    link: "https://ticket.kg/event/kinofestival-i-obshhestvo-rol-i-vliyanie",
    date: "5 октября, Чт",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
  {
    link: "https://cinematica.kg/movies/2023/2/20000001/20001315/20109810/",
    date: "27 октября, Пт",
    desc: "Торжественная церемония открытия киномероприятия QARASH LAB Лаборатория Кино",
    desc2: "Показ фильма Динары Асановой «Пацаны»",
    title: "Торжественная церемония открытия киномероприятия QARASH LAB Лаборатория Кино",
    listTitle: "",
    li: [
      "Приглашаем Вас на торжественную церемонию открытия киномероприятия QARASH LAB/Лаборатория Кино, где участники получат возможность стать частью праздника с участием международных спикеров и звезд ближнего/дальнего зарубежья и местного киносообщества.",
      "Открытие киномероприятия начнется с показа фильма советского кинорежиссера, нашей талантливой соотечественницы, Динары Асановой, «Пацаны».",
      "Показ будет сопровождаться обсуждением с участием именитых киноведов и кинокритиков как из Кыргызстана так и международных гостей. В числе киноведов своими исследованиями с нами поделиться Евгения Звонкина, профессор киноведения университета Paris 8 Венсен-Сен-Дени. Госпожа Звонкина является специалистом по советскому, российскому и центрально-азиатскому кино."
    ],
    text: "",
    duration: "17:00 – 21:30",
    price: "2000",
    place: "кинотеатр Ала-Тоо",
    dress: "Платья/костюмы"
  },
  {
    link: "https://ticket.kg/event/dva-dnya-laboratorii-kino",
    date: "28 октября, Сб",
    desc: "Образовательный блок в АУЦА",
    desc2: "Показ фильма Айсултана Сейитова «Каш»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино приглашает вас посетить двухдневный образовательный блок в рамках киномероприятия QARASH LAB (27-30 октября 2023г.).",
    listTitle: "Образовательный блок – это двухневная платформа, где вы, как участник сможете:",
    li: [
      "лично познакомиться и пообщаться с профессионалами международной киноиндустрии, а также со специалистами теневых цехов кино, таких как: работа с цветокоррекцией, режиссер монтажа, художник по костюмам и художник по картине.",
      "улучшить навыки в разработке синопсиса и питчинга",
      " повысить знания в области презентации и продвижения собственного кинопродукта на международных кинофестивалях",
      "собрать свою творческую команду и поучаствовать в конкурсе на создание короткого метра",      
    ],
    text: "Кроме того, вас ждёт площадка для дискуссии с продюсерами, бизнесменами и представителями Госкино на тему: Бизнес и кино, Меценатство/Частные Фонды кино;",
    duration: "10:00 – 18:30",
    price: "1500",
    place: "Здание Американского Университета в ЦА (AUCA)",
  },
  {
    date: "29 октября, Вс",
    desc: "Образовательный блок в АУЦА",
    desc2: "Показ фильма Дальмира Тилепберген «Белек»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино приглашает вас посетить двухдневный образовательный блок в рамках киномероприятия QARASH LAB (27-30 октября 2023г.).",
    listTitle: "Образовательный блок – это двухневная платформа, где вы, как участник сможете:",
    li: [
      "лично познакомиться и пообщаться с профессионалами международной киноиндустрии, а также со специалистами теневых цехов кино, таких как: работа с цветокоррекцией, режиссер монтажа, художник по костюмам и художник по картине.",
      "улучшить навыки в разработке синопсиса и питчинга",
      " повысить знания в области презентации и продвижения собственного кинопродукта на международных кинофестивалях",
      "собрать свою творческую команду и поучаствовать в конкурсе на создание короткого метра",      
    ],
    text: "Кроме того, вас ждёт площадка для дискуссии с продюсерами, бизнесменами и представителями Госкино на тему: Бизнес и кино, Меценатство/Частные Фонды кино;",
    duration: "10:00 – 17:00",
    price: "1500",
    place: "Здание Американского Университета в ЦА (AUCA)",
  },
  {
    date: "30 октября, Пт",
    desc: "Заключительный концерт в Кыргызской Национальной Филармонии им. Т.Сатылганова",
    title: "СЕТЬ КИНОТЕАТРОВ «СИНЕМАТИКА»/QARASH LAB ЛАБОРАТОРИЯ КИНО ПРИГЛАШАЕТ ВАС НА ЗАКЛЮЧИТЕЛЬНЫЙ КОНЦЕРТ В РАМКАХ КИНОМЕРОПРИЯТИЯ QARASH LAB (27-30 ОКТЯБРЯ 2023Г.).",
    listTitle: "В ЭТОТ ВОЛШЕБНЫЙ ВЕЧЕР ВЫ УСЛЫШИТЕ:",
    li: [
      "Государственный Симфонический оркестр им. Асанкана Джумахматова под руководством главного дирижера Рахатбека Осмонова",
      "Солиста группы Eazy",
      "Таланта Абдылдаева (солиста группы Combo band)",
      "Кайрата Примбердиева",
      "Данияра Нургазиева (солист группы “Kairos”)",
      "Каныкей",
      "Аяну Касымову"
    ],
    duration: "19:00 – 21:00",
    price: "1000-3500",
    place: "Кыргызская Национальная Филармония",
  },
];

const cards24 = [
  {
    date: "4-6 октября",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
  {
    date: "4-6 октября",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
  {
    date: "4-6 октября",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
  {
    date: "4-6 октября",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
  {
    date: "4-6 октября",
    desc: "Обзорная дискуссия на тему: «Кинофестиваль как инструмент социальной политики»",
    title: "Сеть кинотеатров «Синематика»/QARASH LAB лаборатория кино представляет»",
    listTitle: "Обзорная дискуссия с участием:",
    li: [
      "Алексея Аграновича/актер, продюсер, режиссер многих крупных кинофестивалей, в частности, церемонии вручения премии ТЭФИ, «Золотой орел», Московского Международного Кинофестиваля, фестиваля «Кинотавр». Алексей также являлся генеральным продюсером международных кинофестивалей «Край Света. Восток» (Южно-Сахалинск) и «Край Света. Запад» (Калининград)",
      "Асель Шерниязовой/ со-учредитель и управляющий директор Всемирного азиатского кинофестиваля в Лос-Анджелесе, член фонда «Золотой Глобус»",
      "Ануар Кенжебаев/ президент международного кинофестиваля «Байконур»"
    ],
    text: "На тему: «Кинофестиваль как инструмент социальной политики»",
    duration: "10:00 – 14:00",
    price: "2000",
    place: "Отель Хаят",
  },
];

function Programms() {
  const cardRefs = useRef([]);
  const [year, setYear] = useState(2023);
  const [isInView, setIsInView] = useState(new Array(cards23.length).fill(false));
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Добавленное состояние

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const cards = year === 2023 ? cards23 : cards24;

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
            entry.target.classList.add('animate__animated', 'animate__flipInY');
            observers[index].disconnect();
          }
        },
        { threshold: 0.1 }
      );
    });

    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        observers[index].observe(cardRef);
      }
    });

    return () => {
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          observers[index].unobserve(cardRef);
        }
      });
    };
  }, []);

  return (
    <div className={scss.programms_wrapper}>
      <img src="/images/backm.png" alt="" />

      <div className="container">
        <p className={scss.title_b}>Программа</p>
        <div className={scss.years_b}>
          <button className={year === 2023 && scss.activeBtn} onClick={() => setYear(2023)}>2023</button>
          <button className={year === 2024 && scss.activeBtn} onClick={() => setYear(2024)} disabled style={{ cursor: "not-allowed" }}>2024</button>
        </div>
        <div className={scss.programms_card_w}>
          {cards.map((el, index) => {
            return (
              <div
                className={`${scss.program_card} ${isInView[index] ? 'animate__animated animate__flipInY' : ''}`}
                key={`${index}_${el.desc}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className={scss.card_inner}>
                  <div className={scss.card_front}>
                    <p>{el.date}</p>
                  </div>
                  <div className={scss.card_back}>
                    <div className={scss.top_anim}>
                      <img src="/images/clapperboardtop.svg" alt="" />
                    </div>
                    <p className={scss.el_date}>{el.date}</p>
                    <p className={scss.desc2}>{el.desc}</p>
                    <p className={scss.desc2}>{el.desc2}</p>
                    <button onClick={() => openModal(el)}>Подробнее</button>
                  </div>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    {selectedCard && <ModalProgramms creditsData={selectedCard} />}
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
        <img src="/images/horss_b.svg" className={scss.hors} alt="" />
        <img src="/images/qarlab.png" className={scss.carlab} alt="" />
      </div>
    </div>
  );
}

export default Programms;