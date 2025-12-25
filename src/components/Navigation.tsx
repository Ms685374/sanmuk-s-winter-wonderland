import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
const Navigation = () => {
  const navItems = [{
    name: 'Story',
    href: '#about'
  }, {
    name: 'Journey',
    href: '#journey'
  }, {
    name: 'Memories',
    href: '#photos'
  }, {
    name: 'For You',
    href: '#gifts'
  }];
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1]
  }} className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a href="#" className="flex items-center gap-3 group" whileHover={{
        scale: 1.02
      }}>
          <motion.div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" animate={{
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
          <span className="text-xl font-display font-semibold text-foreground hidden sm:block">
            Sanmuk
          </span>
        </motion.a>

        {/* Navigation links */}
        <div className="glass rounded-full px-2 py-2">
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => <motion.a key={item.name} href={item.href} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1 * index
          }} className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50 group">
                {item.name}
              </motion.a>)}
          </div>
        </div>

        {/* CTA */}
        <motion.a href="#gifts" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Hehe
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.nav>;
};
export default Navigation;