import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Quote, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden section-gradient-warm" ref={ref}>
      {/* Rich colorful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/25 via-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-light/20 via-champagne/20 to-rose-light/20 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative orbs */}
      <div className="floating-orb w-96 h-96 bg-gradient-to-br from-primary/40 to-accent/30 -top-20 right-0" />
      <div className="floating-orb w-72 h-72 bg-gradient-to-br from-accent/40 to-coral/30 bottom-20 -left-32" />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-colored mb-6 glow-primary"
          >
            <Heart className="w-10 h-10 text-primary fill-primary/50" />
          </motion.div>
          <span className="section-subtitle mb-4 block">Our Story</span>
          <h2 className="section-title">Two Souls,<br/><span className="text-gradient">One Heart</span></h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image composition with glass effects */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl animate-pulse-soft" />
              
              {/* Animated decorative rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-6 rounded-full border border-accent/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Main image with glass frame */}
              <motion.div
                className="absolute inset-12 glass-colored rounded-full flex items-center justify-center overflow-hidden p-4 glow-primary"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  alt="Zubi & Zuro" 
                  src="/lovable-uploads/45836d85-4e0f-419d-bf43-48d9f9c77fb3.png" 
                  className="w-full h-full object-contain animate-float-gentle rounded-full"
                />
              </motion.div>

              {/* Floating glass labels */}
              <motion.div 
                className="absolute -left-2 top-1/4 glass-colored px-5 py-3 rounded-2xl shadow-lg glow-accent"
                animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs text-white shadow-lg">M</span>
                  Zuro 💙
                </span>
              </motion.div>
              <motion.div 
                className="absolute -right-2 top-2/3 glass-colored px-5 py-3 rounded-2xl shadow-lg glow-primary"
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xs text-white shadow-lg">S</span>
                  Zubi 💗
                </span>
              </motion.div>

              {/* Sparkles */}
              <motion.div
                className="absolute top-4 right-8"
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-4"
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Zuro card */}
            <motion.div 
              className="glass-colored rounded-3xl p-8 group transition-all duration-500 hover:shadow-lg"
              whileHover={{ x: 5, scale: 1.01 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-display font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  M
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">Zuro</h3>
                  <p className="text-sm text-primary font-semibold mb-3">Mukesh</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A hopeless romantic who believes in forever. Making every moment special for his queen.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Zubi card */}
            <motion.div 
              className="glass-colored rounded-3xl p-8 group transition-all duration-500 hover:shadow-lg"
              whileHover={{ x: 5, scale: 1.01 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl font-display font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">Zubi</h3>
                  <p className="text-sm text-primary font-semibold mb-3">Sanjana</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The princess of this paradise, the light of Zuro's world. 
                    Sweet, adorable, and absolutely perfect in every way.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote with glass effect */}
            <motion.div 
              className="glass-colored rounded-2xl p-6 relative overflow-hidden"
              variants={itemVariants}
            >
              <Quote className="w-8 h-8 text-primary/50 absolute top-4 left-4" />
              <blockquote className="text-lg font-display italic text-foreground pl-8">
                "In you, I found my forever. In us, I found my home."
              </blockquote>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
