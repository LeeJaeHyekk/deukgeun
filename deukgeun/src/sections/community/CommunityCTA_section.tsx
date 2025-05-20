import { Button } from '@/shared/ui/Button/Button';
import Link from 'next/link';

const CommunityCTA_section = () => {    
return (
<section className="community-cta">
  <h2>운동, 혼자 하지 마세요</h2>
  <p>득근득근 커뮤니티에서 함께 소통하고 성장하세요!</p>
  <Link href="/community/write">
    <Button variant="secondary">지금 글 쓰기</Button>
  </Link>
</section>
    );
};

export default CommunityCTA_section;