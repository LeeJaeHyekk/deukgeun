// app/mission/[id]/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/shared/lib/auth'; // next-auth 옵션  경로

interface MissionPageProps {
  params: { id: string };
}

export default async function MissionPage({ params }: MissionPageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">미션 ID: {params.id}</h1>
      <p>이 페이지는 로그인한 사용자만 접근할 수 있습니다.</p>
    </div>
  );
}
