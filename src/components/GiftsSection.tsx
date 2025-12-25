import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Crown, Star, Sparkles } from 'lucide-react';
import glassHeart from '@/assets/glass-heart-3d.png';
const InfinityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>;
const gifts = [{
  icon: Heart,
  title: 'Infinite Love',
  description: 'Every heartbeat, every breath, is yours forever.',
  gradient: 'from-rose-400 to-pink-600'
}, {
  icon: Crown,
  title: 'My Queen',
  description: 'You deserve the world, and I will give you everything.',
  gradient: 'from-amber-400 to-orange-500'
}, {
  icon: Star,
  title: 'Endless Joy',
  description: 'I promise to make you smile every single day.',
  gradient: 'from-violet-400 to-purple-600'
}, {
  icon: Heart,
  title: 'Forever Yours',
  description: 'Through every storm and sunshine, always by your side.',
  gradient: 'from-cyan-400 to-blue-500'
}];
const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section id="gifts" className="py-32 px-6 relative overflow-hidden bg-secondary/30" ref={ref}>
      {/* Decorative elements */}
      <div className="floating-orb w-96 h-96 bg-primary/10 top-0 right-0" />
      <div className="floating-orb w-72 h-72 bg-accent/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <motion.img alt="Gift" className="w-24 h-24 mx-auto mb-6 animate-float-gentle" src="/lovable-uploads/34c33b1d-1fa8-4f97-b2f7-ae9743efd491.webp" />
          <span className="section-subtitle mb-4 block">For My Love</span>
          <h2 className="section-title">My <span className="text-gradient">Promises</span></h2>
        </motion.div>

        {/* Gift cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {gifts.map((gift, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          scale: 1.02
        }} className="group">
              <div className="card-glass text-center h-full relative overflow-hidden">
                {/* Icon */}
                <motion.div whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${gift.gradient} flex items-center justify-center shadow-lg`}>
                  <gift.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {gift.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {gift.description}
                </p>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gift.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>)}
        </div>

        {/* Special Christmas message */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="max-w-3xl mx-auto">
          <div className="card-glass text-center relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
            
            <motion.div animate={{
            scale: [1, 1.1, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="inline-block mb-6">
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Merry Christmas, My Zubi!
            </h3>
            
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              You are the most beautiful gift life has given me. 
              This Christmas, I want you to know that my love for you 
              grows stronger with every passing moment. Thank you for 
              being my everything.
            </p>

            <div className="flex items-center justify-center gap-2 text-primary font-display text-xl font-semibold">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Forever Yours, Zuro</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default GiftsSection;