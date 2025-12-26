import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, Music } from 'lucide-react';
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
  }} className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-morphism rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2 md:gap-3 group" whileHover={{
          scale: 1.02
        }}>
            <motion.div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg" animate={{
            rotate: [0, 5, -5, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
            </motion.div>
            <span className="text-lg md:text-xl font-display font-semibold text-foreground hidden sm:block">
              SanMuk
            </span>
          </motion.a>

          {/* Navigation links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => <motion.a key={item.name} href={item.href} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1 * index
          }} whileHover={{
            y: -2
          }} className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-white/50 group">
                {item.name}
                <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100" layoutId="navIndicator" />
              </motion.a>)}
          </div>

          {/* CTA */}
          <motion.a href="#gifts" whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all">
            <span className="hidden sm:inline">Hehe</span>
            <span className="sm:hidden">Gift</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.nav>;
};
export default Navigation;