import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import coupleChristmas from '@/assets/couple-christmas.png';

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.img
          src={coupleChristmas}
          alt="Zubi & Zuro"
          className="w-32 mx-auto mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          Sanmuk Paradise
        </motion.h2>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 fill-primary text-primary" />
          </motion.div>
          <span>by Zuro for Zubi</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Christmas 2024</span>
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        
        <p className="text-muted-foreground/60 text-xs mt-8">
          Forever & Always 💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
