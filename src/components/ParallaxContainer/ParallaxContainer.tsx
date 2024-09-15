import styles from './styles.module.css';

const ParallaxContainer = () => {
  return (
    <div className={styles.parallaxSection}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h2>Использование ИИ позволяет значительно сэкономить ресурсы</h2>
          <div>
            <h1>01</h1>
            <p>
              Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или
              реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их
              возможностях.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxContainer;
