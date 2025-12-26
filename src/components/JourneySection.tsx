import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, MessageCircle, Sparkles, Star, Gift } from 'lucide-react';

const milestones = [
  {
    icon: MessageCircle,
    title: 'First Hello',
    date: 'The Beginning',
    description: 'A simple hello that changed everything. Two strangers became two hearts beating as one.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Falling Deep',
    date: 'Love Blooms',
    description: 'Every conversation longer, every moment precious. Love found its way naturally.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Star,
    title: 'Special Moments',
    date: 'Growing Together',
    description: 'Inside jokes, late night calls, silly nicknames. Building our own universe together.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'Stronger Together',
    date: 'Through It All',
    description: 'Ups and downs, laughter and tears. Every storm made us stronger.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: Gift,
    title: 'This Christmas',
    date: '2024',
    description: 'A digital love letter to my forever. This is just the beginning of our story.',
    color: 'from-rose-400 to-pink-600',
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="journey" className="py-32 px-6 relative overflow-hidden section-gradient-cool" ref={ref}>
      {/* Rich background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent/25 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-colored mb-6 glow-accent"
          >
            <Star className="w-10 h-10 text-accent fill-accent/50" />
          </motion.div>
          <span className="section-subtitle mb-4 block">Timeline</span>
          <h2 className="section-title">Our <span className="text-gradient">Journey</span></h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line with glow */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 rounded-full"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))'
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon node */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-xl z-10`}
                style={{
                  boxShadow: `0 0 30px -5px var(--tw-gradient-from)`
                }}
              >
                <milestone.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
              }`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-colored rounded-3xl p-6 md:p-8 group relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br ${milestone.color} opacity-20 rounded-full blur-2xl`} />
                  
                  <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2 block">
                    {milestone.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
