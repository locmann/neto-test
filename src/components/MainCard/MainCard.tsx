import styles from './styles.module.css';

const MainCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          className={styles.logo}
          src="src/assets/F1ULL_logo_color_bl.svg"
        />
        <button className={`${styles.btn} ${styles.menuBtn}`}>Меню</button>
        <button className={`${styles.btn} ${styles.guideBtn}`}>Получить гайд</button>
        <div className={styles.title}>
          <h1>Как использовать нейросети</h1>
          <p>в графическом дизайне</p>
        </div>
        <div className={styles.card}>
          <p className={styles.badge}>Бесплатный гайд</p>
          Получите бесплатный гайд по искусственному интеллекту, который поможет улучшить работу
          графического дизайнера
        </div>
      </div>
      <img
        src="src/assets/_1.png"
        className={styles.girl}
      />
    </div>
  );
};

export default MainCard;
