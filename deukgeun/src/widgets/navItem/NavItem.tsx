'use client'

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './NavItem.module.css';

interface NavItemProps {
  href: string;
  children: ReactNode;
  disabled?: boolean;
}

export const NavItem = ({ href, children, disabled = false }: NavItemProps) => {
  if (disabled) {
    return (
      <div className={`${styles.navItem} ${styles.disabled}`} aria-disabled="true">
        {children}
      </div>
    );
  }

  return (
    <Link href={href} className={styles.navItem}>
      {children}
    </Link>
  );
};
