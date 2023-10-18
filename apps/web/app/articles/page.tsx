import type { Metadata } from 'next';
import ArticleCard from '../../src/components/ArticleCard';
import styles from '../../src/styles/pages/ArticlesPage.module.scss';

export const metadata: Metadata = {
  title: 'Articles | BBC Spyglass'
}

export default function ArticlesPage() {
  return (
    <>
      <h1 className={styles['heading']}>
        Articles
      </h1>
      <div className={styles['articles-list']}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  );
}