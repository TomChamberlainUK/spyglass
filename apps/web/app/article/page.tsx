import Chart from '../../src/components/Chart';
import styles from '../../src/styles/pages/ArticlePage.module.scss';

export default function ArticlePage() {
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push(Math.random() * 100);
  }
  return (
    <>
      <h1 className={styles['heading']}>
        Article
      </h1>
      <Chart data={data} />
    </>
  );
}