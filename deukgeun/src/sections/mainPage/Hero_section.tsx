import HeroSlider from '@/widgets/slider/slider';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button';
import { FC } from 'react'; 

const HeroSection: FC = () => {
    return (
        <section className="relative h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
            <HeroSlider /> {/* 배경 슬라이드 */}
            <div className="absolute z-10 text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
      운동을 습관으로, 득근득근
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      함께 도전하고, 함께 성장하는 운동 커뮤니티
    </p>
    <Link href="/missions">
      <Button variant="primary">지금 시작하기</Button>
    </Link>
  </div>
    </section>
    )
}

export default HeroSection;