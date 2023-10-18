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
        <ArticleCard
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          views="2,415,716"
          youth="18%"
          recirculation="9%"
          engaged="0:35"
        />
        <ArticleCard
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          views="2,415,716"
          youth="18%"
          recirculation="9%"
          engaged="0:35"
        />
        <ArticleCard
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          views="2,415,716"
          youth="18%"
          recirculation="9%"
          engaged="0:35"
        />
        <ArticleCard
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          views="2,415,716"
          youth="18%"
          recirculation="9%"
          engaged="0:35"
        />
      </div>
    </>
  );
}