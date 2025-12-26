import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Janam Janam - Using a working direct MP3 URL
  // Note: For best experience, host your own MP3 file
  const musicUrl = 'https://pagalfree.com/musics/128-Janam%20Janam%20-%20Dilwale%20128%20Kbps.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Fallback if the URL doesn't work
          console.log('Music playback failed - please check the URL');
        });
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />
      
      {/* Initial play prompt - Modern glass design */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed bottom-28 right-6 z-50"
          >
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism px-6 py-4 rounded-2xl flex items-center gap-4 text-foreground shadow-xl group"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <Music className="w-5 h-5 text-white" />
              </motion.div>
              <div className="text-left">
                <span className="text-sm font-semibold block">Play Music</span>
                <span className="text-xs text-muted-foreground">Janam Janam ♪</span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating music controls - Ultra modern */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="glass-morphism rounded-2xl p-2 flex items-center gap-2">
          {/* Now playing indicator */}
          {isPlaying && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              className="flex items-center gap-2 pl-3 pr-1"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary rounded-full"
                    animate={{ height: ['8px', '16px', '8px'] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-muted-foreground hidden sm:block">Playing</span>
            </motion.div>
          )}
          
          {/* Play/Pause button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
              isPlaying 
                ? 'bg-gradient-to-br from-primary to-accent text-white' 
                : 'bg-secondary hover:bg-secondary/80 text-foreground'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </motion.button>
          
          {/* Mute button */}
          <motion.button
            onClick={toggleMute}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
