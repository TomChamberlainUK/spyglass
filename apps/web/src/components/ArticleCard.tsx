import styles from '../styles/components/ArticleCard.module.scss';

type Props = {
  headline: string;
  views: string;
  youth: string;
  recirculation: string;
  engaged: string;
}

export default function ArticleCard({
  headline,
  views,
  youth,
  recirculation,
  engaged
}: Props) {
  return (
    <div className={styles['container']}>
      <img className={styles['image']} />
      <h1 className={styles['headline']}>
        {headline}
      </h1>
      <hr className={styles['horizontal-rule']} />
      <table className={styles['table']}>
        <tbody className={styles['table__body']}>
          <tr>
            <td>
              Views
            </td>
            <td className={styles['table__cell--right']}>
              {views}
            </td>
          </tr>
          <tr>
            <td>
              Youth
            </td>
            <td className={styles['table__cell--right']}>
              {youth}
            </td>
          </tr>
          <tr>
            <td>
              Recirculation
            </td>
            <td className={styles['table__cell--right']}>
              {recirculation}
            </td>
          </tr>
          <tr>
            <td>
              Engaged
            </td>
            <td className={styles['table__cell--right']}>
              {engaged}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
