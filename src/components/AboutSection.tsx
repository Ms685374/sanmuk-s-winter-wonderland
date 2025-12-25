import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import couple3d from '@/assets/couple-3d.png';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Floating decorative elements */}
      <div className="floating-orb w-80 h-80 bg-primary/10 -top-20 right-0" />
      <div className="floating-orb w-60 h-60 bg-accent/10 bottom-20 -left-20" />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="section-subtitle mb-4 block">Our Story</span>
          <h2 className="section-title">Two Souls,<br/><span className="text-gradient">One Heart</span></h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image composition */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circle */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Main image */}
              <motion.div
                className="absolute inset-8 glass rounded-full flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={couple3d} 
                  alt="Zubi & Zuro" 
                  className="w-3/4 h-auto object-contain animate-float-gentle"
                />
              </motion.div>

              {/* Floating labels */}
              <motion.div 
                className="absolute -left-4 top-1/4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-sm font-medium text-foreground">Zuro 💙</span>
              </motion.div>
              <motion.div 
                className="absolute -right-4 top-2/3 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-foreground">Zubi 💗</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Zuro */}
            <div className="card-glass">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-display font-bold shrink-0">
                  Z
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">Zuro</h3>
                  <p className="text-sm text-primary font-medium mb-3">Mukesh</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The one who created this digital love letter. A hopeless romantic 
                    who believes in forever. Making every moment special for his queen.
                  </p>
                </div>
              </div>
            </div>

            {/* Zubi */}
            <div className="card-glass">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xl font-display font-bold shrink-0">
                  Z
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
            </div>

            {/* Quote */}
            <motion.blockquote 
              className="border-l-2 border-primary/50 pl-6 italic text-muted-foreground"
              variants={itemVariants}
            >
              "In you, I found my forever. In us, I found my home."
            </motion.blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
