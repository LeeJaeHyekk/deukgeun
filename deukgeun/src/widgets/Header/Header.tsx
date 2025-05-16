'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5';
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi';
import { MdOutlineLogout } from 'react-icons/md';
import { NavItem } from '../navItem/NavItem';
import styles from './Header.module.css';

interface HeaderProps {
  isAuthenticated?: boolean;
  username?: string;
  onLogin?: () => void;
  onSignUp?: () => void;
}

export const Header = ({
  isAuthenticated = false,
  username,
  onLogin,
  onSignUp,
}: HeaderProps) => {
  const [isTop, setIsTop] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 상단 바 (로고+아이콘) */}
      <div className={`${styles.topBar} ${!isTop ? styles.hidden : ''}`}>
        <div
          className={styles.logo}
          role="button"
          tabIndex={0}
          onClick={() => router.push('/')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') router.push('/');
          }}
          style={{ cursor: 'pointer' }}
        >
          <img src="/logo.png" alt="Deukgeun" />
        </div>

        <div className={styles.icons}>
          <NavItem href="/intro">커뮤니티 소개</NavItem>
          <NavItem href="#"><IoSearchOutline /></NavItem>
          <NavItem href="#"><WiMoonAltWaningCrescent2 /></NavItem>
          {isAuthenticated ? (
            <div className={styles.userIcon}><MdOutlineLogout /></div>
          ) : (
            <NavItem href="/login"><IoPersonOutline /></NavItem>
          )}
        </div>
      </div>

      {/* sticky 네비게이션 바 */}
      <div className={`${styles.stickyNav} ${!isTop ? styles.atTop : ''}`}>
        <nav className={styles.nav}>
          <ul>
            <li><NavItem href="/missions-and-challenge">챌린지 & 인증</NavItem></li>
            <li><NavItem href="/location-search">내 주변 헬스장</NavItem></li>
            <li><NavItem href="/machine-manual">운동기구 설명서</NavItem></li>
            <li><NavItem href="/community">커뮤니티</NavItem></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

