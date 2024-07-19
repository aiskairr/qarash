import scss from "./Header.module.scss";

function Header() {
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
        <button className={scss.img_burger}>
          <img src="/images/burgermenu.svg" alt="burgermenu" />
        </button>
      </div>
    </div>
  );
}

export default Header;
