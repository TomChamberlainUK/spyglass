import styles from '../styles/components/ArticleCard.module.scss';

export default function ArticleCard() {
  return (
    <div className={styles['container']}>
      <img className={styles['image']} />
      <h1 className={styles['headline']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <hr />
      <table className={styles['table']}>
        <tr>
          <td>
            Views
          </td>
          <td className={styles['table__cell--right']}>
            2,415,716
          </td>
        </tr>
        <tr>
          <td>
            Youth
          </td>
          <td className={styles['table__cell--right']}>
            18%
          </td>
        </tr>
        <tr>
          <td>
            Recirculation
          </td>
          <td className={styles['table__cell--right']}>
            9%
          </td>
        </tr>
        <tr>
          <td>
            Engaged
          </td>
          <td className={styles['table__cell--right']}>
            0:35
          </td>
        </tr>
      </table>
    </div>
  );
}
