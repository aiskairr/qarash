import styles from "./ModalMovies.module.scss"

const ModalMovies = ({ creditsData }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.backImg} src="images/modalImage.png" />
            <div className={styles.main__content}>
                <div className={styles.left__content}>
                    <p className={styles.date}>{creditsData.date}</p>
                    <ul>
                        {creditsData.li?.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                    <p className={styles.text}>{creditsData.text}</p>
                </div>
                <img src={creditsData.img} />
            </div>
            <div className={styles.info}>
                {creditsData?.link && (
                    <a href={creditsData?.link} target="_blank">Купить билет</a>
                )}
                <div className={styles.info__text}>Продолжительность: {creditsData.duration}<br />
                    Стоимость: {creditsData.price} сом <br />
                    Место проведения: {creditsData.place}<br />
                    Форма одежды: {creditsData.dress}</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.creditsContainer}>
                    <div>
                        <div className={styles.section1}>
                            <h3 className={styles.title}>сценарий</h3>
                            <p>{creditsData.scenario}</p>
                        </div>
                        <div className={styles.section2}>
                            <h3 className={styles.title}>оператор</h3>
                            <p>{creditsData.operator}</p>
                            <p>Художник-постановщик</p>
                            <p>{creditsData.designer}</p>
                            <p>{creditsData.light}</p>
                        </div>
                    </div>
                    <div className={styles.section3}>
                        <h3 className={styles.title}>в ролях</h3>
                        <div className={styles.cast}>
                            {creditsData.cast.map((actor, index) => (
                                <p key={index}>{actor}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMovies;