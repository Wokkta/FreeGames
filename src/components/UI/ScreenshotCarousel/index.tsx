import { Carousel, Image } from 'antd';

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
        adaptiveHeight
        className={styles.carousel}>
        {screenshots && screenshots.length > 0 ? (
          screenshots.map((screenshot, index) => (
            <div key={index}>
              <Image
                preview={false}
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`} // Исправьте на бэктики
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
