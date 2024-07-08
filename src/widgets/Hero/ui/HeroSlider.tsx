'use client';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import {
  cvaImageWrapper,
  cvaRoot,
  cvaSlide,
  cvaHeroSliderWrapper,
  cvaImage,
  cvaPreloader,
  cvaPreloaderImageWrapper,
  cvaPreloaderImage,
  cvaSliderHoverPrev,
  cvaSliderHoverNext,
} from '@/widgets/Hero/ui/HeroStyles';

interface IHeroSlider {
  images: string[];
  isComplete: boolean;
  storeProgress: number;
  onChange: (number: number) => void;
  currentImage: number;
}
const HeroSlider: FC<IHeroSlider> = ({
  images,
  isComplete,
  currentImage,
  storeProgress,
  onChange,
}) => {
  const [preloadImage, setPreloaderImage] = useState(
    Math.ceil(images.length / 2)
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const swiperRef = useRef<SwiperRef>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPreloaderImage((prev) => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentImage); // Индексация слайдов начинается с 0
    }
  }, [currentImage]);

  useEffect(() => {
    if (isComplete) {
      setPreloaderImage(Math.ceil(images.length / 2));
      clearInterval(intervalRef.current as NodeJS.Timeout);

      setTimeout(() => {
        setPreloaderImage(-1);
      }, 1200);
    }
  }, [isComplete]);

  const handleSlideChange = (swiper: SwiperClass) => {
    onChange(swiper.activeIndex);
  };
  return (
    <div className={cvaHeroSliderWrapper()}>
      {preloadImage >= 0 && (
        <motion.div
          className={cvaPreloader()}
          variants={{
            hidden: {
              opacity: 0,
              transition: { duration: 0, ease: easeInOut, delay: 1.3 },
            },
            visible: {
              opacity: 1,
            },
          }}
          initial="visible"
          animate={isComplete ? 'hidden' : 'visible'}>
          {images.map((src, index) => (
            <motion.div
              className={cvaPreloaderImageWrapper()}
              key={index}
              variants={{
                hidden: {
                  y: '100%',
                },
                visible: {
                  y: 0,
                  transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] },
                },
              }}
              initial="hidden"
              animate={storeProgress >= 25 ? 'visible' : 'hidden'}>
              <motion.div
                className={cvaPreloaderImage()}
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: { duration: 0.7, ease: easeInOut },
                  },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5, ease: easeInOut },
                  },
                }}
                initial="hidden"
                animate={index === preloadImage ? 'visible' : 'hidden'}>
                <Image src={src} alt={`#`} fill />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={images.length / 2}
        className={cvaRoot()}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => console.log(swiper)}>
        {images.map((src, index) => (
          <SwiperSlide key={index} className={cvaSlide()}>
            <motion.div
              className={cvaImageWrapper()}
              variants={{
                hidden: {
                  y: '100%',
                  opacity: 0,
                  transition: { duration: 1.3, ease: [0.33, 1, 0.68, 1] },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.3,
                    ease: [0.33, 1, 0.68, 1],
                  },
                },
              }}
              initial="hidden"
              animate={isComplete ? 'visible' : 'hidden'}>
              <Image
                src={src}
                alt={`#`}
                className={cvaImage()}
                fill
                unoptimized
              />
            </motion.div>
          </SwiperSlide>
        ))}
        <div className={cvaSliderHoverPrev()}></div>
        <div className={cvaSliderHoverNext()}></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
