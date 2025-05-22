import { FC } from 'react';
import Link from 'next/link';
import styles from './PostCard.module.css';

interface PostCardProps {
  id: string;
  author: string;
  title: string;
  excerpt: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
}

const PostCard: FC<PostCardProps> = ({
  id,
  author,
  title,
  excerpt,
  likeCount,
  commentCount,
  createdAt
}) => {
  return (
    <Link href={`/community/post/${id}`} className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>{createdAt}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.likes}>❤️ {likeCount}</span>
          <span className={styles.comments}>💬 {commentCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard; 