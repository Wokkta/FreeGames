import { Carousel } from 'antd';

import './index.sass';
import styles from './Carousel.module.sass';

interface ScreenshotCarouselProps {
  screenshots: screenshot[] | undefined;
}
interface screenshot {
  image: string;
  id: number;
}
const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ screenshots }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoplay
        pauseOnHover={true}
        pauseOnDotsHover={true}
        draggable
        className={styles.carousel}
        adaptiveHeight>
        {screenshots && screenshots.length > 0 ? (
          screenshots.map((screenshot, index) => (
            <div key={index}>
              <img
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
};

export default ScreenshotCarousel;
