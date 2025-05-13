// import { FC } from 'react';
// import { Button } from '@/shared/ui/Button/Button';
// import styles from './Header.module.css';

// interface HeaderProps {
//   onLogin?: () => void;
//   onSignUp?: () => void;
//   isAuthenticated?: boolean;
//   username?: string;
// }

// export const Header: FC<HeaderProps> = ({
//   onLogin,
//   onSignUp,
//   isAuthenticated = false,
//   username
// }) => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <h1>Deukgeun</h1>
//       </div>
//       <nav className={styles.nav}>
//         <a href="/missions-and-challenge">Missions</a>
//         <a href="/location-search">Location</a>
//         <a href="/machine-manual">Manual</a>
//         <a href="/community">Community</a>
//       </nav>
//       <div className={styles.auth}>
//         {isAuthenticated ? (
//           <div className={styles.userInfo}>
//             <span>Welcome, {username}</span>
//             <Button variant="outline" size="small">Logout</Button>
//           </div>
//         ) : (
//           <>
//             <Button variant="outline" size="small" onClick={onLogin}>Login</Button>
//             <Button variant="primary" size="small" onClick={onSignUp}>Sign Up</Button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }; 
import { FC } from 'react';
import styles from './Header.module.css';
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
        {/* 배너 광고 스크립트 또는 이미지 삽입 위치 */}
      </div>

      <div className={styles.left}>
        <a href="/" className={styles.logo}>
          <img src="/logo.png" alt="Deukgeun" />
        </a>
      </div>

      <div className={styles.center}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/missions-and-challenge">미션</a></li>
            <li><a href="/location-search">운동 장소</a></li>
            <li><a href="/machine-manual">운동 설명서</a></li>
            <li><a href="/community">커뮤니티</a></li>
          </ul>
        </nav>
      </div>

      <div className={styles.right}>
        {/* 로그인/회원가입 */}
        {isAuthenticated ? (
          <div className={styles.userInfo}>
            <span>Welcome, {username}</span>
            <Button variant="outline" size="small">Logout</Button>
          </div>
        ) : (
          <>
            <Button variant="outline" size="small" onClick={onLogin}>Login</Button>
            <Button variant="primary" size="small" onClick={onSignUp}>Sign Up</Button>
          </>
        )}
        {/* 아이콘 버튼들 */}
        <a className={styles.iconBtn}><img src="/icons/search-outline.png" alt="Search" /></a>
        <a className={styles.iconBtn}><img src="/icons/contrast-outline.png" alt="Theme" /></a>
        <a className={styles.iconBtn}><img src="/icons/person-outline.png" alt="Login" /></a>
        <a className={styles.iconBtn}><img src="/icons/menu-outline.png" alt="Menu" /></a>
      </div>
    </header>
  );
};
