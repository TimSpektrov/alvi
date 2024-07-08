'use client';

import { usePreloaderStore } from '@/shared/store/preloaderStore';
import AnimatedText from '@/shared/ui/AnimatedText/ui/AnimatedText';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CircleIcon from '/public/icons/preloader_circle.svg';
import {
  cvaAnimatedText,
  cvaBottom,
  cvaBottomText1,
  cvaBottomText2,
  cvaCircle,
  cvaLine,
  cvaProgressWrapper,
  cvaRoot,
} from '@/widgets/Preloader/ui/PreloaderStyles';

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
