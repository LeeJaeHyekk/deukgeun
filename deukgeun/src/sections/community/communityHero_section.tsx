import { Button } from '@/shared/ui/Button/Button';
import Link from 'next/link';

<section className="community-hero">
  <h1>득근 커뮤니티</h1>
  <p>운동의 고통도, 성취도 함께 나누는 우리만의 공간</p>
  <Link href="/community/write">
    <Button variant="primary">글 쓰기</Button>
  </Link>
</section>