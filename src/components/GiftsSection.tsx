import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Crown, Star, Sparkles, Gift } from 'lucide-react';

const gifts = [
  {
    icon: Heart,
    title: 'Infinite Love',
    description: 'Every heartbeat, every breath, is yours forever.',
    gradient: 'from-rose-400 to-pink-600',
  },
  {
    icon: Crown,
    title: 'My Queen',
    description: 'You deserve the world, and I will give you everything.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Star,
    title: 'Endless Joy',
    description: 'I promise to make you smile every single day.',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    icon: Gift,
    title: 'Forever Yours',
    description: 'Through every storm and sunshine, always by your side.',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gifts" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_60%)]" />
      </div>
      
      {/* Decorative orbs */}
      <div className="floating-orb w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/10 top-0 right-0" />
      <div className="floating-orb w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/10 bottom-0 left-0" />

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
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-morphism mb-6"
          >
            <motion.img
              alt="Gift"
              className="w-12 h-12"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              src="/lovable-uploads/34c33b1d-1fa8-4f97-b2f7-ae9743efd491.webp"
            />
          </motion.div>
          <span className="section-subtitle mb-4 block">For My Love</span>
          <h2 className="section-title">My <span className="text-gradient">Promises</span></h2>
        </motion.div>

        {/* Gift cards grid with enhanced glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group"
            >
              <div className="glass-morphism rounded-3xl p-6 text-center h-full relative overflow-hidden">
                {/* Icon with glow */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${gift.gradient} flex items-center justify-center shadow-lg`}
                  style={{
                    boxShadow: `0 8px 30px -8px var(--tw-gradient-from)`
                  }}
                >
                  <gift.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {gift.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {gift.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gift.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                
                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Christmas message - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-morphism rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
            {/* Animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
            
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Heart className="w-14 h-14 text-primary fill-primary drop-shadow-lg" />
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

            <div className="inline-flex items-center gap-3 glass-morphism px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary font-display text-xl font-semibold">Forever Yours, Zuro</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
