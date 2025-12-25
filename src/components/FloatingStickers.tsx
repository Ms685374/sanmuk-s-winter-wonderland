import { motion } from 'framer-motion';
import heartSticker from '@/assets/heart-sticker.png';
import snowflakeSticker from '@/assets/snowflake-sticker.png';
import treeSticker from '@/assets/tree-sticker.png';
import giftSticker from '@/assets/gift-sticker.png';

const stickers = [
  { src: heartSticker, className: 'top-[12%] left-[3%] w-20 md:w-32' },
  { src: snowflakeSticker, className: 'top-[20%] right-[5%] w-16 md:w-28' },
  { src: treeSticker, className: 'bottom-[25%] left-[2%] w-20 md:w-32' },
  { src: giftSticker, className: 'bottom-[15%] right-[3%] w-18 md:w-28' },
  { src: heartSticker, className: 'top-[55%] right-[12%] w-14 md:w-20' },
  { src: snowflakeSticker, className: 'top-[40%] left-[8%] w-16 md:w-24' },
];

const FloatingStickers = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stickers.map((sticker, index) => (
        <motion.img
          key={index}
          src={sticker.src}
          alt="sticker"
          className={`absolute sticker ${sticker.className}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.2 },
            scale: { duration: 0.5, delay: index * 0.2 },
            y: { duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStickers;
