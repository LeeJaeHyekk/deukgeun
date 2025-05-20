import { FC } from 'react';
import HeroSlider from '@/widgets/slider/slider';
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
    
//     <main className={styles.main}>
//   <section className={styles.hero}>
//     <HeroSlider />
//     <div className={styles.cta}>
//       <h1>운동을 습관으로, 득근득근</h1>
//       <p>함께하면 더 즐거운 피트니스 여정. 득근득근과 시작하세요.</p>
//       <Link href="/missions">
//         <Button variant="primary">지금 시작하기</Button>
//       </Link>
//     </div>
//   </section>

//   <section className={styles.features}>
//     <h2 className={styles.sectionTitle}>Explore Our Features</h2>
//     <div className={styles.grid}>
//       {features.map((feature) => (
//         <FeatureCard key={feature.title} {...feature} />
//       ))}
//     </div>
//   </section>
// </main>
  );
};

export default HomePage;
