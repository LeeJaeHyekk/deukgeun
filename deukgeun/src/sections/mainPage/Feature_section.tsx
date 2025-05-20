import FeatureCard from '@/widgets/FeatureCard/FeatureCard';
import { FC } from 'react';

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

const FeatureSection: FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-3">득근득근의 핵심 기능</h2>
    <p className="text-muted-foreground text-lg">당신의 피트니스 여정을 함께합니다.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    {features.map((feature) => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </div>
</section>
    )
}

export default FeatureSection;