import { FC } from 'react';
import styles from './page.module.css';

import HeroSection from '@/sections/mainPage/Hero_section';
import FeatureSection from '@/sections/mainPage/Feature_section';
import PhilosophySection from '@/sections/mainPage/Philosophy_section';
import CallToActionSection from '@/sections/mainPage/CallToAction_section';
import { Footer } from '@/widgets/Footer/Footer';


const HomePage: FC = () => {
  return (
    <main className={styles.main}>

  <HeroSection />         
  <FeatureSection />      
  <PhilosophySection />
  <CallToActionSection />
  <Footer />
    </main>
  );
};

export default HomePage;
