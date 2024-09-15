import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../../shared/data/carouselData.ts';
import Card from '../Card/Card.tsx';
import styles from './styles.module.css';
import CustomArrows from '../CustomArrows/CustomArrows.tsx';

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.wrapper}>
      <Carousel
        responsive={responsive}
        className={styles.carousel}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomArrows />}
      >
        {data.map((item) => (
          <Card
            img={item.image}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </Carousel>
      <h1 className={styles.title}>Рандомные стили</h1>
    </div>
  );
};

export default Slider;
