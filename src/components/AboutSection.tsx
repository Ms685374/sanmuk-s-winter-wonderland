import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Quote } from 'lucide-react';

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
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08)_0%,transparent_50%)]" />
      </div>
      
      {/* Floating decorative orbs */}
      <div className="floating-orb w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent -top-20 right-0" />
      <div className="floating-orb w-72 h-72 bg-gradient-to-br from-accent/15 to-transparent bottom-20 -left-32" />

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
            className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-morphism mb-6"
          >
            <Heart className="w-8 h-8 text-primary fill-primary/50" />
          </motion.div>
          <span className="section-subtitle mb-4 block">Our Story</span>
          <h2 className="section-title">Two Souls,<br/><span className="text-gradient">One Heart</span></h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image composition with glass effects */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated decorative rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-6 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Main image with glass frame */}
              <motion.div
                className="absolute inset-12 glass-morphism rounded-full flex items-center justify-center overflow-hidden p-4"
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
                className="absolute -left-2 top-1/4 glass-morphism px-5 py-3 rounded-2xl shadow-lg"
                animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs text-white">M</span>
                  Zuro 💙
                </span>
              </motion.div>
              <motion.div 
                className="absolute -right-2 top-2/3 glass-morphism px-5 py-3 rounded-2xl shadow-lg"
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xs text-white">S</span>
                  Zubi 💗
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Zuro card */}
            <motion.div 
              className="card-glass group"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-display font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  M
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">Zuro</h3>
                  <p className="text-sm text-primary font-medium mb-3">Mukesh</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A hopeless romantic who believes in forever. Making every moment special for his queen.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Zubi card */}
            <motion.div 
              className="card-glass group"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl font-display font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">Zubi</h3>
                  <p className="text-sm text-primary font-medium mb-3">Sanjana</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The princess of this paradise, the light of Zuro's world. 
                    Sweet, adorable, and absolutely perfect in every way.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote with glass effect */}
            <motion.div 
              className="glass-morphism rounded-2xl p-6 relative overflow-hidden"
              variants={itemVariants}
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
              <blockquote className="text-lg font-display italic text-muted-foreground pl-8">
                "In you, I found my forever. In us, I found my home."
              </blockquote>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
