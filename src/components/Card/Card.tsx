import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  img: string;
  title: string;
  description: string;
};

const Card: FC<Props> = ({ img, description, title }) => {
  return (
    <div className={styles.cardWrapper}>
      <img
        src={img}
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
