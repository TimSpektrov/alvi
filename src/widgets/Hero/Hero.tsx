import { FC, useState } from 'react';
import HeroSlider from '@/widgets/Hero/ui/HeroSlider';
import { HeroFooter } from '@/widgets/Hero/ui/HeroFooter';
import { cvaHero } from '@/widgets/Hero/ui/HeroStyles';
import { usePreloaderStore } from '@/shared/store/preloaderStore';
import { easeInOut, motion } from 'framer-motion';

interface IHero {}
export const Hero: FC<IHero> = () => {
  const isComplete = usePreloaderStore((state) => state.isComplete);
  const storeProgress = usePreloaderStore((state) => state.storeProgress);
  const images = [
    '/images/hero_6.jpg',
    '/images/hero_1.jpg',
    '/images/hero_2.jpg',
    '/images/hero_3.jpg',
    '/images/hero_4.jpg',
    '/images/hero_5.jpg',
    '/images/hero_6.jpg',
    '/images/hero_1.jpg',
  ];
  const [preloaderImage, setPreloaderImage] = useState<number>(
    Math.ceil(images.length / 2)
  );
  const handleChangeCurrentImage = (img: number) => {
    console.log(img);
    setPreloaderImage(img);
  };

  return (
    <section className={cvaHero()}>
      <HeroSlider
        currentImage={preloaderImage}
        images={images}
        isComplete={isComplete}
        storeProgress={storeProgress}
        onChange={handleChangeCurrentImage}
      />
      {isComplete && (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { duration: 0.5, ease: easeInOut, delay: 0.5 },
            },
          }}
          initial="hidden"
          animate={isComplete ? 'visible' : 'hidden'}>
          <HeroFooter
            currentImage={preloaderImage}
            length={images.length}
            onChange={handleChangeCurrentImage}
          />
        </motion.div>
      )}
    </section>
  );
};
