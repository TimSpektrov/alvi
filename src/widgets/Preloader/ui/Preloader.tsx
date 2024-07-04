'use client';

import { usePreloaderStore } from '@/shared/store/preloaderStore';
import AnimatedText from '@/shared/ui/AnimatedText/ui/AnimatedText';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CircleIcon from '/public/icons/preloader_circle.svg';

const cvaRoot = cva([
  'Preloader-cvaRoot',
  'fixed h-full w-full',
  'flex flex-col items-center justify-center',
]);

const cvaCircle = cva([
  'Preloader-cvaCircle',
  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'w-[111.9rem]',
]);

const cvaProgressWrapper = cva([
  'Preloader-cvaProgress',
  'absolute top-2.8 left-1/2 -translate-x-1/2',
  'h-1.7 overflow-hidden',
  'text-secondary text-cTextDisabled',
]);
const cvaAnimatedText = cva([
  'Preloader-cvaAnimatedText',
  'text-preloader font-sb',
]);

const cvaBottom = cva([
  'Preloader-cvaBottom',
  'absolute bottom-2.8 left-1/2 -translate-x-1/2',
  'flex flex-col items-center',
]);

const cvaBottomText1 = cva([
  'Preloader-cvaBottomText1',
  'text-secondary text-cTextDisabled uppercase mb-0.4',
]);

const cvaBottomText2 = cva([
  'Preloader-cvaBottomText2',
  'text-secondary text-cTextPrimary uppercase',
]);

const cvaLine = cva([
  'Preloader-cvaLine',
  'absolute bottom-9.9 left-1/2 -translate-x-1/2',
  'w-0.1 opacity-[0.12] bg-cBorderSecondary',
  'rotate-180',
]);

const DURATION = 4000;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const { setIsComplete, setStoreProgress } = usePreloaderStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStoreProgress(100);
          setIsComplete(true);
          return 100;
        }
        setStoreProgress(prev + 1);
        return prev + 1;
      });
    }, DURATION / 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cvaRoot()}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}>
        <CircleIcon className={cvaCircle()} />
      </motion.div>
      <motion.div
        className={cvaProgressWrapper()}
        initial={{ opacity: 1 }}
        animate={progress >= 95 ? { opacity: 0 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}>
        <motion.div
          key={progress}
          initial={{ y: 0 }}
          animate={{ y: '-50%' }}
          transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}>
          <div>{Math.max(progress - 1, 0)}</div>
          <div>{progress}</div>
        </motion.div>
      </motion.div>
      <AnimatedText
        className={cvaAnimatedText()}
        animate={progress <= 99 ? 'visible' : 'hidden'}
        wrapWords>
        Alvi Salotti
      </AnimatedText>
      <div className={cvaBottom()}>
        <AnimatedText
          className={cvaBottomText1()}
          animate={
            progress >= 10 ? (progress <= 99 ? 'visible' : 'hidden') : 'hidden'
          }
          fromOpacity>
          since 1998
        </AnimatedText>
        <AnimatedText
          className={cvaBottomText2()}
          animate={
            progress >= 15 ? (progress <= 99 ? 'visible' : 'hidden') : 'hidden'
          }
          fromOpacity>
          мебель как искусство
        </AnimatedText>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: '55rem' }}
        transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
        className={cvaLine()}></motion.div>
    </div>
  );
};

export default Preloader;
