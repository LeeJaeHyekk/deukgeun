'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/Card/card';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 여기서 로그인 로직 추가 (예: next-auth signIn('credentials'))
    const res = await signIn('credentials', {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    setLoading(false);

    if (res?.ok) {
      router.push('/');
    } else {
      alert('로그인 실패. 아이디나 비밀번호를 확인해주세요.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-2xl border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">로그인</CardTitle>
          <p className="text-muted-foreground text-sm mt-2">아이디로 로그인하거나 소셜 계정을 연결하세요</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              name="username"
              placeholder="아이디"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <a href="/auth/find-id" className="hover:underline">아이디 찾기</a>
              <a href="/auth/find-password" className="hover:underline">비밀번호 찾기</a>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </form>

          <div className="my-6 text-center text-sm text-muted-foreground">또는</div>

          <Button
            variant="outline"
            className="flex items-center gap-2 w-full"
            onClick={() => signIn('google')}
          >
            <FcGoogle className="text-xl" />
            Google로 로그인
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
