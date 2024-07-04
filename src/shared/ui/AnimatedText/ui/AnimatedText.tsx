import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const cvaContainer = cva([
  'AnimatedText-cvaContainer',
  'overflow-hidden',
  'inline-block',
]);

const cvaWord = cva([
  'AnimatedText-cvaWord',
  'inline-block',
  'whitespace-nowrap',
]);

interface AnimatedTextProps {
  children: string;
  className?: string;
  animate: 'visible' | 'hidden';
  fromOpacity?: boolean;
  wrapWords?: boolean;
}

const AnimatedText = ({
  children,
  className,
  animate,
  fromOpacity,
  wrapWords,
}: AnimatedTextProps) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (wrapWords) {
      setWords(children.split(' '));
    } else {
      setWords([children]);
    }
  }, [children]);

  const container = {
    hidden: { opacity: fromOpacity ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const child = {
    hidden: {
      y: '100%',
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: (i: number) => ({
      y: '0%',
      transition: {
        delay: i * 0.4,
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      className={clsx(cvaContainer(), className)}
      variants={container}
      initial="hidden"
      animate={animate}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cvaWord()}
          custom={index}
          variants={child}
          initial="hidden"
          animate={animate}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
