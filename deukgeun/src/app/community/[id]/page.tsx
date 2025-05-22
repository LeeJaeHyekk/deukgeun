import { getServerSession } from "next-auth";
import { redirect, notFound } from "next/navigation";

import { authOptions } from "@/shared/lib/auth"; // 인증 설정
import { getPostById } from "@/features/community/api/community"; // 게시글 조회 API
import { PostPage } from "@/features/community/pages/PostPage"; // 게시글 렌더링 컴포넌트

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  // ✅ 로그인 여부 확인
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }

  // ✅ 게시글 유효성 검사
  const post = await getPostById(params.id);
  if (!post) {
    return notFound();
  }

  // ✅ 게시글 렌더링
  return <PostPage post={post} />;
}
