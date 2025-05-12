import { FC } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
  onLogin?: () => void;
  onSignUp?: () => void;
  isAuthenticated?: boolean;
  username?: string;
}

export const Header: FC<HeaderProps> = ({
  onLogin,
  onSignUp,
  isAuthenticated = false,
  username
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Deukgeun</h1>
      </div>
      <nav className={styles.nav}>
        <a href="/missions-and-challenge">Missions</a>
        <a href="/location-search">Location</a>
        <a href="/machine-manual">Manual</a>
        <a href="/community">Community</a>
      </nav>
      <div className={styles.auth}>
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
      </div>
    </header>
  );
}; 