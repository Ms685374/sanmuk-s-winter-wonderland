import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Photos', href: '#photos' },
    { name: 'Gifts', href: '#gifts' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary font-display font-bold text-lg">
          <Heart className="w-5 h-5 fill-primary animate-heart-beat" />
          <span className="hidden sm:inline">Sanmuk</span>
        </a>
        
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
