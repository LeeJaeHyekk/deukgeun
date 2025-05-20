import { Button } from '@/shared/ui/Button/Button';
import Link from 'next/link';
import { FC } from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-purple-600 text-white py-16 text-center px-6 md:px-0">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        오늘부터 득근득근과 함께 운동 습관을 만들어보세요
      </h2>
      <p className="text-lg md:text-xl mb-8 text-white/90">
        미션 참여, 주변 헬스장 탐색, 운동 커뮤니티까지 한 번에!
      </p>
      <Link href="/missions">
        <Button variant="secondary" size="large">
          지금 시작하기
        </Button>
      </Link>
    </section>
  );
};

export default CallToActionSection;