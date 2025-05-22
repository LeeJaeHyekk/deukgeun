// src/shared/lib/auth.ts
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 여기에 DB 조회, 인증 로직 추가
        if (
          credentials?.email === "admin@example.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "1",
            name: "관리자",
            email: "admin@example.com",
          };
        }

        return null; // 인증 실패
      },
    }),
  ],
  pages: {
    signIn: "/login", // 로그인 페이지 라우트
  },
  session: {
    strategy: "jwt", // 세션 전략: jwt or database
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
};
