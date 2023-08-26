import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Button } from 'antd';
import './index.css';
import styles from './Carousel.module.css';

interface ScreenshotCarouselProps {
  screenshots: string[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ screenshots }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Button
        className={`${styles.prevButton} ant-btn-dark`} // Используем ant-btn-dark для темной темы
        onClick={() => sliderRef.current?.slickPrev()}
        icon={<LeftOutlined />}
      />
      <Slider ref={sliderRef} {...settings}>
        {screenshots.map((screenshot: string, index: number) => (
          <div key={index}>
            <img src={screenshot} alt={`Screenshot ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <Button
        className={`${styles.nextButton} ant-btn-dark`} // Используем ant-btn-dark для темной темы
        onClick={() => sliderRef.current?.slickNext()}
        icon={<RightOutlined />}
      />
    </div>
  );
};

export default ScreenshotCarousel;
