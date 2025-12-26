import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Crown, Star, Sparkles, Gift } from 'lucide-react';

const gifts = [
  {
    icon: Heart,
    title: 'Infinite Love',
    description: 'Every heartbeat, every breath, is yours forever.',
    gradient: 'from-rose-400 to-pink-600',
    glow: 'rgba(244, 114, 182, 0.4)',
  },
  {
    icon: Crown,
    title: 'My Queen',
    description: 'You deserve the world, and I will give you everything.',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.4)',
  },
  {
    icon: Star,
    title: 'Endless Joy',
    description: 'I promise to make you smile every single day.',
    gradient: 'from-violet-400 to-purple-600',
    glow: 'rgba(167, 139, 250, 0.4)',
  },
  {
    icon: Gift,
    title: 'Forever Yours',
    description: 'Through every storm and sunshine, always by your side.',
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'rgba(34, 211, 238, 0.4)',
  },
];

const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gifts" className="py-32 px-6 relative overflow-hidden section-gradient-warm" ref={ref}>
      {/* Rich colorful background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/30 via-accent/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-coral/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Decorative orbs */}
      <div className="floating-orb w-96 h-96 bg-gradient-to-br from-primary/50 to-accent/40 top-0 right-0" />
      <div className="floating-orb w-72 h-72 bg-gradient-to-br from-accent/50 to-coral/40 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full glass-colored mb-6 glow-accent"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Gift className="w-12 h-12 text-accent" />
            </motion.div>
          </motion.div>
          <span className="section-subtitle mb-4 block">For My Love</span>
          <h2 className="section-title">My <span className="text-gradient">Promises</span></h2>
        </motion.div>

        {/* Gift cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group"
            >
              <div className="glass-colored rounded-3xl p-6 text-center h-full relative overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-500">
                {/* Background glow on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${gift.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Icon with glow */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-18 h-18 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${gift.gradient} flex items-center justify-center shadow-xl`}
                  style={{
                    boxShadow: `0 10px 40px -8px ${gift.glow}`,
                    width: '72px',
                    height: '72px'
                  }}
                >
                  <gift.icon className="w-9 h-9 text-white" />
                </motion.div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {gift.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {gift.description}
                </p>

                {/* Sparkle decoration */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Christmas message */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-colored rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden border-2 border-white/30">
            {/* Animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            
            {/* Colorful corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-br-full" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/30 to-transparent rounded-tr-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-full" />
            
            {/* Decorative corners */}
            <div className="absolute top-6 left-6 w-10 h-10 border-l-3 border-t-3 border-primary/50 rounded-tl-xl" />
            <div className="absolute top-6 right-6 w-10 h-10 border-r-3 border-t-3 border-primary/50 rounded-tr-xl" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-l-3 border-b-3 border-primary/50 rounded-bl-xl" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-r-3 border-b-3 border-primary/50 rounded-br-xl" />
            
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6 relative"
            >
              <Heart className="w-16 h-16 text-primary fill-primary drop-shadow-lg" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.div>
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Merry Christmas, My Zubi!
            </h3>
            
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8 text-lg">
              You are the most beautiful gift life has given me. 
              This Christmas, I want you to know that my love for you 
              grows stronger with every passing moment. Thank you for 
              being my everything.
            </p>

            <motion.div 
              className="inline-flex items-center gap-3 glass-colored px-8 py-4 rounded-full border-2 border-white/40"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary font-display text-xl font-semibold">Forever Yours, Zuro</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
