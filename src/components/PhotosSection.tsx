import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Heart } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  caption: string;
}

// Static photos - edit these directly or via Visual Edit
const photos: Photo[] = [
  { id: '1', src: '/lovable-uploads/227301d6-3d8a-443d-a520-57a6e0010fd1.png', caption: 'Us Together' },
  { id: '2', src: '/lovable-uploads/45836d85-4e0f-419d-bf43-48d9f9c77fb3.png', caption: 'Our Love' },
  { id: '3', src: '/lovable-uploads/34c33b1d-1fa8-4f97-b2f7-ae9743efd491.webp', caption: 'Christmas Vibes' },
  { id: '4', src: '/lovable-uploads/f1390a03-1e92-400b-a35f-73c298cf89c7.png', caption: 'Forever' },
];

const PhotosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section id="photos" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blush/30 to-background" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1)_0%,transparent_50%)]" />
      </div>
      
      {/* Floating glass orbs */}
      <div className="floating-orb w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/10 top-20 -right-40" />
      <div className="floating-orb w-60 h-60 bg-gradient-to-br from-accent/20 to-primary/10 bottom-40 -left-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-morphism mb-6"
          >
            <Heart className="w-8 h-8 text-primary fill-primary/50" />
          </motion.div>
          <span className="section-subtitle mb-4 block">Gallery</span>
          <h2 className="section-title">Our <span className="text-gradient">Memories</span></h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-light">
            Moments frozen in time, forever in our hearts
          </p>
        </motion.div>

        {/* Modern bento grid with glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
              whileHover={{ y: -12, scale: 1.03 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Glass card container */}
              <div className="absolute inset-0 glass-morphism rounded-3xl overflow-hidden">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Glass border effect on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/30 transition-all duration-500" />
                
                {/* Caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <div className="glass-morphism-dark rounded-2xl px-4 py-3 inline-block">
                    <span className="text-sm md:text-base font-medium text-white">
                      {photo.caption}
                    </span>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal with enhanced glassmorphism */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/90 backdrop-blur-2xl" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass container */}
            <div className="glass-morphism rounded-[2rem] p-2 md:p-3 overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-auto max-h-[75vh] object-contain rounded-[1.5rem]"
              />
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-6 text-white font-display text-xl"
            >
              {selectedPhoto.caption}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PhotosSection;
