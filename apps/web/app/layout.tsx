import { Header, Footer } from 'ui';
import styles from '../src/styles/layout.module.scss';
import '../src/styles/global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles['container']}>
          <Header />
            <div className={styles['content']}>
              {children}
            </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
