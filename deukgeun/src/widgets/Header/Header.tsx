'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi';
import { MdOutlineLogout } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      {/* 고정 상단 바 */}
      <div className={styles.container}>
        {/* 왼쪽 로고 */}
        <div className={`${styles.left} ${!isTop ? styles.disabled : ''}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Deukgeun" />
          </Link>
        </div>

        {/* 우측 아이콘 */}
        <div className={`${styles.icons} ${!isTop ? styles.disabled : ''}`}>
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

      {/* 스크롤 따라 sticky 되는 메뉴바 */}
      <div className={styles.centerSticky}>
        <nav className={styles.nav}>
          <ul>
            <li><NavItem href="/missions-and-challenge">챌린지 & 인증</NavItem></li>
            <li><NavItem href="/location-search">내 주변 헬스장</NavItem></li>
            <li><NavItem href="/machine-manual">운동기구 설명서</NavItem></li>
            <li><NavItem href="/community">커뮤니티</NavItem></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
