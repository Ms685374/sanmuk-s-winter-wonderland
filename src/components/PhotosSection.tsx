import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Plus, X, Image as ImageIcon } from 'lucide-react';
import coupleChristmas from '@/assets/couple-christmas.png';
import couple3d from '@/assets/couple-3d.png';
import glassHeart from '@/assets/glass-heart-3d.png';
interface Photo {
  id: string;
  src: string;
  caption: string;
  isPlaceholder?: boolean;
}
const initialPhotos: Photo[] = [{
  id: '1',
  src: couple3d,
  caption: 'Us Together',
  isPlaceholder: false
}, {
  id: '2',
  src: glassHeart,
  caption: 'Our Love',
  isPlaceholder: false
}, {
  id: '3',
  src: coupleChristmas,
  caption: 'Christmas Vibes',
  isPlaceholder: false
}, {
  id: '4',
  src: '',
  caption: 'photo1',
  isPlaceholder: true
}, {
  id: '5',
  src: '',
  caption: 'photo2',
  isPlaceholder: true
}, {
  id: '6',
  src: '',
  caption: 'photo3',
  isPlaceholder: true
}];
const PhotosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, photoId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => prev.map(photo => photo.id === photoId ? {
          ...photo,
          src: reader.result as string,
          isPlaceholder: false,
          caption: 'Our Memory'
        } : photo));
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const removePhoto = useCallback((photoId: string) => {
    setPhotos(prev => prev.map(photo => photo.id === photoId ? {
      ...photo,
      src: '',
      isPlaceholder: true,
      caption: 'Add Photo'
    } : photo));
    setSelectedPhoto(null);
  }, []);
  return <section id="photos" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blush/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <span className="section-subtitle mb-4 block">Gallery</span>
          <h2 className="section-title">Our <span className="text-gradient">Memories</span></h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Upload your favorite photos to make this gallery truly yours
          </p>
        </motion.div>

        {/* Photo grid - Bento style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => <motion.div key={photo.id} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          scale: 1.02
        }} className={`relative group cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <div className={`glass rounded-3xl overflow-hidden transition-all duration-500 ${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                {photo.isPlaceholder ? <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input type="file" accept="image/*" className="hidden" onChange={e => handleFileUpload(e, photo.id)} />
                    <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-3 group-hover:border-primary/50 transition-colors">
                      <Plus className="w-8 h-8 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{photo.caption}</span>
                  </label> : <>
                    <img src={photo.src} alt={photo.caption} onClick={() => setSelectedPhoto(photo)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 border-rose-300 shadow-inner opacity-100" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-primary-foreground font-medium">{photo.caption}</span>
                    </div>
                  </>}
              </div>
            </motion.div>)}
        </div>

        {/* Tip */}
        
      </div>

      {/* Lightbox modal */}
      {selectedPhoto && !selectedPhoto.isPlaceholder && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedPhoto(null)}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="w-full h-auto max-h-[80vh] object-contain rounded-3xl" />
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={() => removePhoto(selectedPhoto.id)} className="glass w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-destructive transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-primary-foreground mt-4 font-medium">
              {selectedPhoto.caption}
            </p>
          </motion.div>
        </motion.div>}
    </section>;
};
export default PhotosSection;
