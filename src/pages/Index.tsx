import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import PhotosSection from '@/components/PhotosSection';
import GiftsSection from '@/components/GiftsSection';
import Footer from '@/components/Footer';
import Snowfall from '@/components/Snowfall';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sanmuk Paradise | A Christmas Love Story</title>
        <meta name="description" content="A magical Christmas journey of Zubi & Zuro - A digital love letter celebrating our love story." />
      </Helmet>
      
      <div className="min-h-screen bg-background relative overflow-x-hidden noise-overlay">
        <Snowfall />
        <Navigation />
        <MusicPlayer />
        <main>
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <PhotosSection />
          <GiftsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
