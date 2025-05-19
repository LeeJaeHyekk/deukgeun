import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, imageSrc, href }) => {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;