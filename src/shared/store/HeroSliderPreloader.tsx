// 'use client';
// import { usePreloaderStore } from '@/shared/store/preloaderStore';
// import { easeInOut, motion } from 'framer-motion';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import {
//   cvaPreloader,
//   cvaPreloaderImage,
//   cvaPreloaderImageWrapper,
//   cvaWrapper,
// } from '@/widgets/Hero/ui';
//
// interface HeroSliderProps {
//   images: string[];
// }
//
// const HeroSliderPreloader = ({ images }: HeroSliderProps) => {
//   const isComplete = usePreloaderStore((state) => state.isComplete);
//   const storeProgress = usePreloaderStore((state) => state.storeProgress);
//   const [preloaderImage, setPreloaderImage] = useState<number>(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setPreloaderImage((prev) => {
//         if (prev === images.length - 1) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 500);
//
//     return () => {
//       clearInterval(intervalRef.current as NodeJS.Timeout);
//     };
//   }, []);
//
//   useEffect(() => {
//     if (isComplete) {
//       setPreloaderImage(Math.ceil(images.length / 2));
//       clearInterval(intervalRef.current as NodeJS.Timeout);
//
//       setTimeout(() => {
//         setPreloaderImage(-1);
//       }, 1200);
//     }
//   }, [isComplete]);
//
//   return (
//     <div className={cvaWrapper()}>
//       {preloaderImage >= 0 ? (
//         <div className={cvaPreloader()}>
//           {images.map((src, index) => (
//             <motion.div
//               className={cvaPreloaderImageWrapper()}
//               key={index}
//               variants={{
//                 hidden: {
//                   y: '100%',
//                 },
//                 visible: {
//                   y: 0,
//                   transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] },
//                 },
//               }}
//               initial="hidden"
//               animate={storeProgress >= 25 ? 'visible' : 'hidden'}>
//               <motion.div
//                 className={cvaPreloaderImage()}
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     transition: { duration: 0.7, ease: easeInOut },
//                   },
//                   visible: {
//                     opacity: 1,
//                     transition: { duration: 0.5, ease: easeInOut },
//                   },
//                 }}
//                 initial="hidden"
//                 animate={index === preloaderImage ? 'visible' : 'hidden'}>
//                 <Image src={src} alt={`#`} fill />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };
//
// export default HeroSliderPreloader;
