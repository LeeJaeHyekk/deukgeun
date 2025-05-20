'use client';

import { NavItem } from '@/widgets/navItem/NavItem'; // 경로는 프로젝트에 맞게 조정
import styles from './Footer.module.css';
import { FC } from 'react';

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
};

type NavSection = {
  title: string;
  links: LinkItem[];
};

const NAV_SECTIONS: NavSection[] = [
  {
    title: '서비스',
    links: [
      { label: '미션 & 챌린지', href: '/missions' },
      { label: '주변 헬스장 찾기', href: '/locations' },
      { label: '운동 기구 매뉴얼', href: '/machines' },
      { label: '커뮤니티', href: '/community' },
    ],
  },
  {
    title: '커뮤니티',
    links: [
      { label: '포럼', href: '/community/forum' },
      { label: '이벤트', href: '/community/events', disabled: true }, // 예시로 disabled 옵션
      { label: '인스타그램', href: 'https://instagram.com/deukgeun', external: true },
      { label: '트위터', href: 'https://twitter.com/deukgeun', external: true },
    ],
  },
];

const CONTACTS = [
  { label: '이메일', value: 'support@deukgeun.com' },
  { label: '전화', value: '010-1234-5678' },
  { label: '주소', value: '서울특별시 강남구 역삼동' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.title}>득근득근</h3>
          <p className={styles.description}>
            함께 운동하고 성장하는 커뮤니티. 운동 습관을 만드는 최고의 동반자.
          </p>
        </div>

        {NAV_SECTIONS.map(({ title, links }) => (
          <nav key={title} className={styles.nav}>
            <h4 className={styles.navTitle}>{title}</h4>
            <ul className={styles.navList}>
              {links.map(({ label, href, external, disabled }) => (
                <li key={label}>
                  {external ? (
                    disabled ? (
                      <NavItem href={href} disabled>
                        {label}
                      </NavItem>
                    ) : (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.externalLink}
                      >
                        {label}
                      </a>
                    )
                  ) : (
                    <NavItem href={href} disabled={disabled}>
                      {label}
                    </NavItem>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.contact}>
          <h4 className={styles.navTitle}>연락처</h4>
          <address className={styles.address}>
            {CONTACTS.map(({ label, value }) => (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className={styles.copy}>© 2025 득근득근. All rights reserved.</div>
    </footer>
  );
};
