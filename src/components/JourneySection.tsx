import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, MessageCircle, Sparkles, Star, Gift } from 'lucide-react';

const milestones = [
  {
    icon: MessageCircle,
    title: 'First Hello',
    date: 'The Beginning',
    description: 'A simple hello that changed everything. Two strangers became two hearts beating as one.',
  },
  {
    icon: Heart,
    title: 'Falling Deep',
    date: 'Love Blooms',
    description: 'Every conversation longer, every moment precious. Love found its way naturally.',
  },
  {
    icon: Star,
    title: 'Special Moments',
    date: 'Growing Together',
    description: 'Inside jokes, late night calls, silly nicknames. Building our own universe together.',
  },
  {
    icon: Sparkles,
    title: 'Stronger Together',
    date: 'Through It All',
    description: 'Ups and downs, laughter and tears. Every storm made us stronger.',
  },
  {
    icon: Gift,
    title: 'This Christmas',
    date: '2024',
    description: 'A digital love letter to my forever. This is just the beginning of our story.',
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="journey" className="py-32 px-6 relative overflow-hidden bg-secondary/30" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="section-subtitle mb-4 block">Timeline</span>
          <h2 className="section-title">Our <span className="text-gradient">Journey</span></h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
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
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg z-10 glow-primary"
              >
                <milestone.icon className="w-5 h-5 text-primary-foreground" />
              </motion.div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-glass group"
                >
                  <span className="text-xs uppercase tracking-widest text-accent font-medium mb-2 block">
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
