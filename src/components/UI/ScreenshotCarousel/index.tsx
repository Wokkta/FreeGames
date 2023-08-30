import { Carousel, Image } from 'antd';
import { useEffect } from 'react';

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
  useEffect(() => {
    // Логика, которая будет выполнена при изменении screenshots
    console.log('Screenshots have changed:', screenshots);
  }, [screenshots]);

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoplay
        pauseOnHover={true}
        pauseOnDotsHover={true}
        draggable
        adaptiveHeight
        className={styles.carousel}>
        {screenshots ? (
          screenshots.map((screenshot, index) => (
            <div key={screenshot.id} className={styles.imageContainer}>
              <Image
                preview={false}
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`}
                className={styles.carouselImage}
                key={screenshot.id}
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
