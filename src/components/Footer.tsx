import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div className="flex items-center justify-center md:justify-start gap-3 mb-4" whileHover={{
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
              <span className="text-2xl font-display font-semibold text-foreground">
                Sanmuk Paradise
              </span>
            </motion.div>
            <p className="text-muted-foreground text-sm">
              From Zuro to Zubi
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 text-center">
            <div>
              <div className="text-2xl font-display font-semibold text-foreground">∞</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Love</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-display font-semibold text-foreground">2025</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Christmas</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-display font-semibold text-foreground">Forever</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Together</div>
            </div>
          </div>

          {/* Scroll to top */}
          <motion.button onClick={scrollToTop} whileHover={{
          scale: 1.1,
          y: -5
        }} whileTap={{
          scale: 0.95
        }} className="glass w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            Made with 
            <motion.span className="inline-block mx-1 text-primary" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }}>
              ♥
            </motion.span> 
            for the love of my life
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2024 Sanmuk Paradise. Forever & Always.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;