import scss from './Footer.module.scss'

function Footer() {
  return (
    <div className={scss.footer_w}>
        <div className={scss.top_foot}>
            <p className={scss.title}>
            Контакты
            </p>
            <a href="mailto:qarashlab@gmail.com">qarashlab@gmail.com</a>
            <a href="https://www.instagram.com/qarash_lab/"><img src="/images/inst.svg" alt="" /></a>
            <img src="/images/Background.png" alt="" />
        </div>
        <div className={scss.bot_foot}>
            <img src="/images/qarlab.png" alt="" />
            <p>© All rights reserved</p>
            <a href="">
                <img src="/images/socinst.svg" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Footer