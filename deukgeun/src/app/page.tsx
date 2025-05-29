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
  <section className={`${styles.section} ${styles.hero}`}>
    <div className={styles.heroText}>
      <h1>당신만의 운동 루틴을 지금 시작해보세요</h1>
      <p>득근득근과 함께 목표를 정하고, 지속 가능한 변화를 만들어보세요.</p>
    </div>
    <div className={styles.heroImage}>
      <img src="/health2.jpg"/>
    </div>
  </section>

  <section className={`${styles.section} ${styles.features}`}>
    <FeatureSection />
  </section>

  <section className={`${styles.section} ${styles.philosophy}`}>
    <PhilosophySection />
  </section>

  <section className={`${styles.section} ${styles.callToAction}`}>
    <CallToActionSection />
  </section>

  <Footer />
</main>




  );
};

export default HomePage;


