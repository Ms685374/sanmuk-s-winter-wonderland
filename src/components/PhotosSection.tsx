import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Heart, Camera, Sparkles } from 'lucide-react';

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
    <section id="photos" className="py-32 px-6 relative overflow-hidden section-gradient-rich" ref={ref}>
      {/* Rich colorful background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/35 via-accent/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/35 via-coral/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full blur-3xl" />
      </div>
      
      {/* Floating orbs */}
      <div className="floating-orb w-80 h-80 bg-gradient-to-br from-primary/50 to-accent/40 top-20 -right-40" />
      <div className="floating-orb w-60 h-60 bg-gradient-to-br from-accent/50 to-coral/40 bottom-40 -left-20" />

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
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-colored mb-6 glow-primary"
          >
            <Camera className="w-10 h-10 text-primary" />
          </motion.div>
          <span className="section-subtitle mb-4 block">Gallery</span>
          <h2 className="section-title">Our <span className="text-gradient">Memories</span></h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-light">
            Moments frozen in time, forever in our hearts
          </p>
        </motion.div>

        {/* Modern bento grid with rich glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
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
              {/* Glow behind card */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glass card container */}
              <div className="absolute inset-0 glass-colored rounded-3xl overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-500">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <div className="glass-colored rounded-2xl px-4 py-3 inline-flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm md:text-base font-semibold text-foreground">
                      {photo.caption}
                    </span>
                  </div>
                </motion.div>

                {/* Corner heart accent */}
                <motion.div 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-colored flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </motion.div>

                {/* Sparkle decorations */}
                <motion.div
                  className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/95 backdrop-blur-2xl" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass container */}
            <div className="glass-morphism rounded-[2rem] p-3 md:p-4 overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-6"
            >
              <span className="inline-flex items-center gap-2 glass-morphism px-6 py-3 rounded-full">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="font-display text-xl text-white">{selectedPhoto.caption}</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PhotosSection;
