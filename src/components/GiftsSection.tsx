import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, Heart, Sparkles, Star, Crown, Diamond } from 'lucide-react';
import giftSticker from '@/assets/gift-sticker.png';

const gifts = [
  {
    icon: Heart,
    title: 'Infinite Love',
    description: 'All my love, today and forever. Every heartbeat is yours, my Zubi.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Crown,
    title: 'My Queen',
    description: 'You rule my heart and my world. You deserve nothing but the best.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Star,
    title: 'Endless Happiness',
    description: 'I promise to make you smile every single day. Your happiness is my priority.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Diamond,
    title: 'Forever Together',
    description: 'Through every storm and every sunshine, I will be by your side always.',
    color: 'from-cyan-500 to-blue-500',
  },
];

const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gifts" className="py-24 px-4 relative overflow-hidden bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.img
            src={giftSticker}
            alt="Gift"
            className="w-24 h-24 mx-auto mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            For My Love
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="section-title">My Gifts to You</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            No material gift can express my love, but here are my promises to you, my Zubi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass-card rounded-3xl p-6 text-center h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gift.color} flex items-center justify-center shadow-lg`}
                >
                  <gift.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {gift.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {gift.description}
                </p>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gift.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Special message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-shimmer" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Heart className="w-12 h-12 fill-primary text-primary" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Merry Christmas, My Zubi! 🎄
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              You are the best gift I could ever receive. Thank you for being mine, 
              for loving me, and for making every day magical. This Christmas and forever, 
              you're my everything.
            </p>
            <p className="text-primary font-display font-bold text-xl mt-6">
              — With all my love, Your Zuro 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
