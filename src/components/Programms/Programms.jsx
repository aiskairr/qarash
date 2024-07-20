import React, { useEffect, useRef, useState } from 'react';
import scss from './Programms.module.scss';
import 'animate.css/animate.min.css';

const cards = [
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
];

function Programms() {
  const cardRefs = useRef([]);
  const [isInView, setIsInView] = useState(new Array(cards.length).fill(false));

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
            observers[index].disconnect(); // Disconnect observer after triggering animation
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the card is in view
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
      <div className="container">
        <p className={scss.title_b}>Программы</p>
        <div className={scss.years_b}>
          <button>2023</button>
          <button>2024</button>
        </div>
        <div className={scss.programms_card_w}>
          {cards.map((el, index) => {
            return (
              <div
                className={`${scss.program_card} ${isInView[index] ? 'animate__animated animate__flipInY' : ''}`}
                key={index}
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
                    <p>{el.desc}</p>
                    <button>Подробнее</button>
                  </div>
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
