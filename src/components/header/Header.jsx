import React, { useState, useEffect } from 'react';
import scss from "./Header.module.scss";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add(scss.modal_open);
    } else {
      document.body.classList.remove(scss.modal_open);
    }
  }, [isModalOpen]);

  return (
    <div className={scss.header_w}>
      <div className={scss.header_grid_w + " container"}>
        <div className={scss.header_left_w}>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className={scss.header_right_w}>
          <a href="">
            <img src="/images/circle.svg" alt="" />
            <p>О проекте</p>
          </a>
          <a href="">Программа</a>
          <a href="">Контакты</a>
        </div>
        <button className={scss.img_burger} onClick={toggleModal}>
          <img src="/images/burgermenu.svg" alt="burgermenu" />
        </button>
      </div>
      {isModalOpen && (
        <div className={scss.modal}>
          <div className={scss.modal_content}>
          <span className={scss.close_button} onClick={toggleModal}>&times;</span>

            <div>
            <a href="">О проекте</a>
            <a href="">Программа</a>
            <a href="">Контакты</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
