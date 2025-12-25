import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, ImagePlus } from 'lucide-react';
import coupleChristmas from '@/assets/couple-christmas.png';
import zuroSticker from '@/assets/zuro-sticker.png';
import zubiSticker from '@/assets/zubi-sticker.png';

const PhotosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const photoFrames = [
    { img: coupleChristmas, caption: 'Us Together 💕', rotate: -3 },
    { img: zuroSticker, caption: 'Zuro 💙', rotate: 5 },
    { img: zubiSticker, caption: 'Zubi 💗', rotate: -5 },
    { placeholder: true, caption: 'Add your photo!', rotate: 3 },
    { placeholder: true, caption: 'More memories!', rotate: -4 },
    { placeholder: true, caption: 'Our moments!', rotate: 6 },
  ];

  return (
    <section id="photos" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <Camera className="w-4 h-4" />
            Memories
            <Camera className="w-4 h-4" />
          </span>
          <h2 className="section-title">Our Photos</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Every picture tells a story of our love. Add your favorite photos here!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {photoFrames.map((frame, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: frame.rotate }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: frame.rotate } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-4 shadow-card">
                <div className="aspect-square rounded-xl overflow-hidden bg-secondary/50 relative">
                  {frame.placeholder ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <ImagePlus className="w-12 h-12 mb-2" />
                      <span className="text-sm font-medium">Add Photo</span>
                    </div>
                  ) : (
                    <motion.img
                      src={frame.img}
                      alt={frame.caption}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                <p className="text-center mt-3 font-medium text-foreground text-sm">
                  {frame.caption}
                </p>
              </div>
              
              {/* Decorative tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-accent/80 rounded-sm shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-muted-foreground text-sm mt-8 flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 text-primary" />
          Replace placeholders with your real photos to make it extra special!
          <Heart className="w-4 h-4 text-primary" />
        </motion.p>
      </div>
    </section>
  );
};

export default PhotosSection;
