import { FC } from 'react';
import HeroSlider from '@/widgets/slider/slider';
import styles from './page.module.css';
import FeatureCard from '@/widgets/FeatureCard/FeatureCard';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button'; 


const features = [
  {
    title: 'Missions & Challenges',
    description: 'Complete missions and challenges to earn rewards and track your progress',
    imageSrc: '/wallpaper_mission_challange.png',
    href: '/missions'
  },
  {
    title: 'Find Locations',
    description: 'Discover nearby fitness facilities and workout spots',
    imageSrc: '/wallpaper_location_gym.png',
    href: '/locations'
  },
  {
    title: 'Machine Manual',
    description: 'Learn how to use exercise equipment properly and safely',
    imageSrc: '/wallpaper_maual.png',
    href: '/machines'
  },
  {
    title: 'Community',
    description: '커뮤니티',
    imageSrc: '/wallpaper_community.png',
    href: '/community'
  },
];

console.log(features)

const HomePage: FC = () => {
  return (
    // <main className={styles.main}>
    //   <section className={styles.hero}> 
    //     <HeroSlider />
    //   </section>

    //   <section className={styles.features}>
    //     {features.map((feature) => (
    //       <FeatureCard
    //         key={feature.title}
    //         title={feature.title}
    //         description={feature.description}
    //         imageSrc={feature.imageSrc}
    //         href={feature.href}
    //       />
    //     ))}
    //   </section>
    // </main>
    <main className={styles.main}>
  <section className={styles.hero}>
    <HeroSlider />
    <div className={styles.cta}>
      <h1>운동을 습관으로, 득근득근</h1>
      <p>함께하면 더 즐거운 피트니스 여정. 득근득근과 시작하세요.</p>
      <Link href="/missions">
        <Button variant="primary">지금 시작하기</Button>
      </Link>
    </div>
  </section>

  <section className={styles.features}>
    <h2 className={styles.sectionTitle}>Explore Our Features</h2>
    <div className={styles.grid}>
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  </section>
</main>
  );
};

export default HomePage;
