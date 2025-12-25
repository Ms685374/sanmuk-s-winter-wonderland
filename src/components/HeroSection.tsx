import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import coupleChristmas from '@/assets/couple-christmas.png';
import heroBg from '@/assets/hero-bg.jpg';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-20">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1
      }} className="mb-6">
          <motion.div animate={{
          rotate: [0, 10, -10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            Merry Christmas 2024
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.3
      }} className="hero-title mb-6">
          SANMUK
          <br />
          PARADISE
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8 font-body">
          A magical Christmas journey of 
          <span className="text-primary font-semibold"> Zubi </span>
          & 
          <span className="text-primary font-semibold"> Zuro </span>
        </motion.p>

        {/* Couple Image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.5
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.9,
        type: 'spring'
      }} className="relative inline-block">
          <motion.img src={coupleChristmas} alt="Zubi & Zuro" className="w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl" animate={{
          y: [0, -15, 0]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          
          {/* Floating hearts around couple */}
          {[...Array(6)].map((_, i) => {})}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div animate={{
            y: [0, 12, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;