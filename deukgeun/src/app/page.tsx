import { FC } from 'react';
import HeroSlider from '@/widgets/slider/slider';
import styles from './page.module.css';

const HomePage: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}> 
        <HeroSlider />
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Missions & Challenges</h2>
          <p>Complete missions and challenges to earn rewards and track your progress</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Find Locations</h2>
          <p>Discover nearby fitness facilities and workout spots</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Machine Manual</h2>
          <p>Learn how to use exercise equipment properly and safely</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Community</h2>
          <p>Connect with other fitness enthusiasts and share your journey</p>
        </div>        
        
      </section>
    </main>
  );
};

export default HomePage;
