'use client';

import { Tabs } from '@/shared/ui/Tab/Tabs';
import { TabsContent } from '@/shared/ui/Tab/TabsContent';
import { TabsList } from '@/shared/ui/Tab/TabsList';
import { TabsTrigger } from '@/shared/ui/Tab/TabsTrigger';
import PostCard from '@/widgets/PostCard/PostCard';
import { FC } from 'react';

const mockPosts = [
  {
    id: '1',
    author: "득근러123",
    title: "오늘 하체운동 미쳤네요...",
    excerpt: "스쿼트 100kg 도전했는데 허벅지가 찢어질 뻔...",
    likeCount: 24,
    commentCount: 10,
    createdAt: "2시간 전"
  }
];

const CommunityTabsSection: FC = () => {
  return (
    <Tabs defaultValue="free">
      <TabsList>
        <TabsTrigger value="free">자유게시판</TabsTrigger>
        <TabsTrigger value="qna">운동 Q&A</TabsTrigger>
        <TabsTrigger value="challenge">챌린지 인증</TabsTrigger>
        <TabsTrigger value="diet">식단 공유</TabsTrigger>
        <TabsTrigger value="review">헬스장 후기</TabsTrigger>
      </TabsList>
    
      <TabsContent value="free">
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />  
        ))}
      </TabsContent>

      <TabsContent value="qna">
        <p>운동 관련 Q&A 게시글이 여기에 표시됩니다.</p>
      </TabsContent>

      <TabsContent value="challenge">
        <p>챌린지 인증 게시글이 여기에 표시됩니다.</p>
      </TabsContent>

      <TabsContent value="diet">
        <p>식단 공유 게시글이 여기에 표시됩니다.</p>
      </TabsContent>

      <TabsContent value="review">
        <p>헬스장 후기 게시글이 여기에 표시됩니다.</p>
      </TabsContent>
    </Tabs>
  );
};

export default CommunityTabsSection;