import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gradientBg from '@/assets/gradient-bg.jpg';
import christmasOrb from '@/assets/christmas-orb.png';
import couple3d from '@/assets/couple-3d.png';
import glassHeart from '@/assets/glass-heart-3d.png';
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  return <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <img src={gradientBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* Floating orbs */}
      <motion.div className="floating-orb w-96 h-96 bg-primary/20 top-20 -right-20" style={{
      y
    }} />
      <motion.div className="floating-orb w-72 h-72 bg-accent/20 bottom-40 -left-20" style={{
      y: useTransform(scrollYProgress, [0, 1], [0, -100])
    }} />

      {/* Main content */}
      <motion.div className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-32 pb-20" style={{
      opacity,
      scale
    }}>
        {/* Christmas badge */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.3
      }} className="mb-8">
          <span className="section-subtitle inline-flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-accent" />
            Christmas 2024
            <Sparkles className="w-4 h-4 text-accent" />
          </span>
        </motion.div>

        {/* Main title with 3D element */}
        <div className="relative mb-8">
          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }} className="hero-title">
            <span className="text-foreground">SANMUK</span>
            <br />
            <span className="hero-title-accent">PARADISE</span>
          </motion.h1>

          {/* Floating 3D orb - positioned to overlap title */}
          <motion.img src={christmasOrb} alt="Christmas Ornament" initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -20
        }} animate={{
          opacity: 1,
          scale: 1,
          rotate: 0
        }} transition={{
          duration: 1.5,
          delay: 1,
          type: 'spring'
        }} className="absolute -right-10 md:right-10 lg:right-32 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-64 animate-float-gentle glow-accent opacity-0" />
        </div>

        {/* Subtitle */}
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="text-lg md:text-xl max-w-lg mx-auto mb-16 font-light text-rose-50">
          A love story between 
          <span className="font-medium text-yellow-300"> Zubi </span>
          & 
          <span className="font-medium text-yellow-300"> Zuro</span>
        </motion.p>

        {/* 3D Couple + Glass Heart composition */}
        <motion.div initial={{
        opacity: 0,
        y: 60
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        delay: 1
      }} className="relative inline-block">
          {/* Glass heart behind couple */}
          <motion.img src={glassHeart} alt="Crystal Heart" animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] blur-sm opacity-0" />
          
          {/* Main couple image */}
          <motion.img alt="Zubi & Zuro" animate={{
          y: [0, -15, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }} src="/lovable-uploads/227301d6-3d8a-443d-a520-57a6e0010fd1.png" className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-2xl mx-auto border-rose-300 shadow rounded-4xl opacity-100" />

          {/* Glow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2.5
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="items-center gap-2 text-muted-foreground flex flex-row">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent opacity-0" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;