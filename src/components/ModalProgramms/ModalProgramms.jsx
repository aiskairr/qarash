import styles from "./ModalProgramms.module.scss"

const ModalProgramms = ({ creditsData }) => {
    console.log(creditsData)
    return (
        <div className={styles.wrapper}>
            <img className={styles.backImg} src="images/modalImage.png" />
            <div className={styles.main__content}>
                <div className={styles.left__content}>
                    <p className={styles.date}>{creditsData.date}</p>
                    <p className={styles.title}>{creditsData.title}</p>
                    <p className={styles.listTitle}>{creditsData.listTitle}</p>
                    <ul>
                        {creditsData.li?.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                    <p className={styles.text}>{creditsData.text}</p>
                </div>
            </div>
            <div className={styles.info}>
                <button>Купить билет</button>
                <div className={styles.info__text}>Продолжительность: {creditsData.duration}<br />
                    Стоимость: {creditsData.price} сом <br />
                    Место проведения: {creditsData.place}<br />
                    Форма одежды: {creditsData.dress}</div>
            </div>
        </div>
    )
}

export default ModalProgramms;