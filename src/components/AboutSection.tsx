import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import zuroSticker from '@/assets/zuro-sticker.png';
import zubiSticker from '@/assets/zubi-sticker.png';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <Star className="w-4 h-4 fill-accent" />
            Our Story
            <Star className="w-4 h-4 fill-accent" />
          </span>
          <h2 className="section-title">About Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Zuro Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            
            <motion.img
              src={zuroSticker}
              alt="Zuro"
              className="w-32 h-32 mx-auto mb-6 drop-shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring' }}
            />
            
            <h3 className="text-2xl font-display font-bold text-center mb-2 text-foreground">
              Zuro
            </h3>
            <p className="text-primary font-medium text-center mb-4">
              (Mukesh)
            </p>
            <p className="text-muted-foreground text-center leading-relaxed">
              The one who created this magical paradise for his queen. 
              A hopeless romantic with endless love for his Zubi. 
              Always making her smile and creating beautiful memories together.
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 right-4"
            >
              <Heart className="w-6 h-6 fill-primary text-primary" />
            </motion.div>
          </motion.div>

          {/* Zubi Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <motion.img
              src={zubiSticker}
              alt="Zubi"
              className="w-32 h-32 mx-auto mb-6 drop-shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring' }}
            />
            
            <h3 className="text-2xl font-display font-bold text-center mb-2 text-foreground">
              Zubi
            </h3>
            <p className="text-primary font-medium text-center mb-4">
              (Sanjana)
            </p>
            <p className="text-muted-foreground text-center leading-relaxed">
              The princess of this paradise, the one who lights up Zuro's world. 
              Sweet, adorable, and absolutely perfect in every way. 
              The reason behind every smile and every heartbeat.
            </p>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-4 left-4"
            >
              <Sparkles className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Together section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-6">
              <motion.img
                src={zuroSticker}
                alt="Zuro"
                className="w-16 h-16"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-10 h-10 fill-primary text-primary" />
              </motion.div>
              <motion.img
                src={zubiSticker}
                alt="Zubi"
                className="w-16 h-16"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-lg text-muted-foreground italic font-body">
              "Two souls, one heart, infinite love. This Christmas, we celebrate not just the season, 
              but the beautiful journey of us together."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
