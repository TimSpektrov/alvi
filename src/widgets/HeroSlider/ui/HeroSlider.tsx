'use client';
import { usePreloaderStore } from '@/shared/store/preloaderStore';
import { cva } from 'class-variance-authority';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const cvaWrapper = cva(['HeroSlider-cvaRoot', 'pt-[24.3rem] relative']);

const cvaRoot = cva(['HeroSlider-cvaRoot', '[&>.swiper-wrapper]:items-center']);

const cvaPreloader = cva([
  'HeroSlider-cvaPreloader',
  'overflow-hidden',
  'absolute left-1/2 top-[24.3rem] -translate-x-1/2',
  'w-[254px] h-[304px]',
  'z-10',
]);

const cvaPreloaderImageWrapper = cva([
  'HeroSlider-cvaPreloaderImageWrapper',
  'absolute w-full h-full',
]);

const cvaPreloaderImage = cva([
  'HeroSlider-cvaPreloaderImage',
  'relative',
  'w-full h-full',
]);

const cvaSlide = cva([
  'HeroSlider-cvaSlide',
  'flex',
  'justify-center',
  'items-center',
  '!max-h-[30.4rem] max-w-[40rem] !w-auto',
  'relative',
]);

const cvaImageWrapper = cva(['HeroSlider-cvaImageWrapper', 'relative']);

const cvaImage = cva([
  'HeroSlider-cvaImage',
  '!relative',
  '!w-auto',
  '!h-auto',
]);

interface HeroSliderProps {
  images: string[];
}

const HeroSlider = ({ images }: HeroSliderProps) => {
  const isComplete = usePreloaderStore((state) => state.isComplete);
  const storeProgress = usePreloaderStore((state) => state.storeProgress);
  const [preloaderImage, setPreloaderImage] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    if (isComplete) {
      // todo доработать, чтобы динамически устанавливалось нужное значение
      setPreloaderImage(4);
      clearInterval(intervalRef.current as NodeJS.Timeout);

      setTimeout(() => {
        setPreloaderImage(-1);
      }, 1200);
    }
  }, [isComplete]);

  return (
    <div className={cvaWrapper()}>
      {preloaderImage >= 0 ? (
        <div className={cvaPreloader()}>
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
                animate={index === preloaderImage ? 'visible' : 'hidden'}>
                <Image src={src} alt={`#`} fill />
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : null}
      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={images.length / 2}
        className={cvaRoot()}>
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
      </Swiper>
    </div>
  );
};

export default HeroSlider;
