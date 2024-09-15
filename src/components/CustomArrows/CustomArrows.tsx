import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  next?: () => void;
  previous?: () => void;
};

const CustomArrows: FC<Props> = ({ next, previous }) => {
  return (
    <div className={styles.wrapper}>
      <img
        onClick={previous}
        src="src/assets/arrowleft.svg"
      />
      <img
        onClick={next}
        src="src/assets/arrowright.svg"
      />
    </div>
  );
};

export default CustomArrows;
