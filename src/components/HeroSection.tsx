import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import gradientBg from '@/assets/gradient-bg.jpg';
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  return <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <motion.img src={gradientBg} alt="" className="w-full h-full object-cover" style={{
        y
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
      </div>

      {/* Floating glass orbs */}
      <motion.div className="floating-orb w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-transparent top-0 -right-32" style={{
      y
    }} />
      <motion.div className="floating-orb w-96 h-96 bg-gradient-to-br from-accent/25 to-transparent bottom-20 -left-32" style={{
      y: useTransform(scrollYProgress, [0, 1], [0, -150])
    }} />
      <motion.div className="floating-orb w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/10 top-1/3 left-1/4" animate={{
      y: [0, -30, 0],
      x: [0, 20, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      {/* Main content */}
      <motion.div className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-32 pb-20" style={{
      opacity,
      scale
    }}>
        {/* Christmas badge with glass effect */}
        <motion.div initial={{
        opacity: 0,
        y: 30,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.3
      }} className="mb-10">
          <div className="inline-flex items-center gap-3 glass-morphism px-6 py-3 rounded-full">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm uppercase tracking-[0.25em] font-medium text-foreground">
              Christmas 2025
            </span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </div>
        </motion.div>

        {/* Main title - Massive & Bold */}
        <div className="relative mb-12">
          <motion.h1 initial={{
          opacity: 0,
          y: 60
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }} className="hero-title">
            <motion.span className="block text-foreground" animate={{
            opacity: [0.9, 1, 0.9]
          }} transition={{
            duration: 3,
            repeat: Infinity
          }}>
              SANMUK
            </motion.span>
            <motion.span className="block hero-title-accent" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1,
            delay: 0.8
          }}>
              PARADISE
            </motion.span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div initial={{
          scaleX: 0
        }} animate={{
          scaleX: 1
        }} transition={{
          duration: 1,
          delay: 1.2
        }} className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Subtitle with glass pill */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 1
      }} className="mb-16">
          <div className="inline-flex items-center gap-4 glass-morphism px-8 py-4 rounded-full">
            <span className="text-lg md:text-xl font-light text-foreground">
              A love story between
            </span>
            <span className="font-display text-xl md:text-2xl font-semibold text-primary">Zubi</span>
            <span className="text-muted-foreground">&</span>
            <span className="font-display text-xl md:text-2xl font-semibold text-primary">Zuro</span>
          </div>
        </motion.div>

        {/* Hero image with enhanced glass frame */}
        <motion.div initial={{
        opacity: 0,
        y: 80,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 1.2,
        type: 'spring'
      }} className="relative inline-block">
          {/* Glass frame */}
          <div className="glass-morphism p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] animate-glow-pulse">
            <motion.img alt="Zubi & Zuro" animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }} src="/lovable-uploads/227301d6-3d8a-443d-a520-57a6e0010fd1.png" className="relative z-10 w-56 md:w-72 lg:w-80 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl" />
          </div>

          {/* Floating decorative elements */}
          <motion.div className="absolute -top-6 -right-6 glass-morphism px-4 py-2 rounded-full" animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5
        }}>
            <span className="text-sm font-medium">💕 Forever</span>
          </motion.div>
          
          <motion.div className="absolute -bottom-4 -left-6 glass-morphism px-4 py-2 rounded-full" animate={{
          y: [0, -8, 0],
          rotate: [0, -5, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity
        }}>
            <span className="text-sm font-medium">✨ Always</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2.5
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Scroll to explore
            </span>
            <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;