import { FC } from 'react';
import styles from './Header.module.css';
import { IoSearchOutline } from "react-icons/io5"; //돗보기 아이콘
import { WiMoonAltWaningCrescent2 } from "react-icons/wi"; //달 아이콘
import { IoPersonOutline } from "react-icons/io5"; //사람 아이콘
import { MdOutlineLogout } from "react-icons/md";
import { Button } from '@/shared/ui/Button/Button';

interface HeaderProps {
  isAuthenticated?: boolean;
  username?: string;
  onLogin?: () => void;
  onSignUp?: () => void;
}

export const Header: FC<HeaderProps> = ({
  isAuthenticated = false,
  username,
  onLogin,
  onSignUp,
}) => {
  return (
    <header className={styles.header}>
      {/* 모바일 전용 배너 */}
      <div className={styles.mobileBanner}>
        {/* 모바일 배너 광고 삽입 영역 */}
      </div>

      {/* 힙플처럼 좌-중앙-우 정렬 */}
      <div>
      <div className={styles.container}>
        {/* 왼쪽: 로고 */}
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            <img src="/logo.png" alt="Deukgeun" />
          </a>
        </div>
        <div className={styles.icons}>
          <a className={styles.communityIntro}>커뮤니티 소개</a>
            <a className={styles.iconBtn}><IoSearchOutline/></a>
            <a className={styles.iconBtn}><WiMoonAltWaningCrescent2/></a>
            {isAuthenticated ? (
              <div className='Login-user'><MdOutlineLogout/></div>) : (
              <a className='Logout-user'><IoPersonOutline/></a>
            )}
          </div>
          </div>

        {/* 중앙: 메뉴 + 제목 */}
        <div className={styles.center}>
          
          <nav className={styles.nav}>
            <ul>
              <li><a href="/missions-and-challenge">챌린지 & 인증</a></li>
              <li><a href="/location-search">내 주변 헬스장</a></li>
              <li><a href="/machine-manual">운동기구 설명서</a></li>
              <li><a href="/community">커뮤니티</a></li>
            </ul>
          </nav>
        </div>

        {/* 오른쪽: 로그인 및 아이콘 */}
        <div className={styles.right}>

          {/* 아이콘 버튼 */}
          
        </div>
      </div>
    </header>
  );
};
