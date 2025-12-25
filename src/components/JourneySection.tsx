import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, Calendar, MessageCircleHeart, Sparkles, Gift } from 'lucide-react';

const journeyMilestones = [
  {
    icon: MessageCircleHeart,
    title: 'First Hello',
    description: 'The magical moment when Zuro first talked to Zubi. Little did they know, this simple hello would change their lives forever.',
    color: 'bg-pink-500',
  },
  {
    icon: Heart,
    title: 'Falling in Love',
    description: 'Every conversation became longer, every moment more precious. Two hearts beating as one, falling deeper in love each day.',
    color: 'bg-red-500',
  },
  {
    icon: Star,
    title: 'Special Moments',
    description: 'From silly nicknames to late-night calls, from inside jokes to shared dreams. Creating a universe of their own.',
    color: 'bg-amber-500',
  },
  {
    icon: Sparkles,
    title: 'Growing Together',
    description: 'Through ups and downs, laughter and tears, they grew stronger. Supporting each other, becoming each other\'s home.',
    color: 'bg-purple-500',
  },
  {
    icon: Gift,
    title: 'Christmas 2024',
    description: 'This magical Christmas, Zuro creates this special paradise for his Zubi. A digital love letter that will last forever.',
    color: 'bg-green-500',
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="py-24 px-4 relative overflow-hidden bg-secondary/20" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <Calendar className="w-4 h-4" />
            Our Timeline
            <Calendar className="w-4 h-4" />
          </span>
          <h2 className="section-title">Our Journey</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"
          />

          {journeyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring' }}
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full ${milestone.color} flex items-center justify-center shadow-lg z-10`}
              >
                <milestone.icon className="w-5 h-5 text-white" />
              </motion.div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
