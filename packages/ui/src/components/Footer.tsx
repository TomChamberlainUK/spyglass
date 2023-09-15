import * as React from 'react';
import styles from '../styles/Footer.module.scss';
import BBCLogo from '../images/BBC_Logo_White_RGB.svg';

export default function Footer() {
  return (
    <footer className={styles['container']}>
      <img
        src={BBCLogo.src}
        alt={'BBC logo'}
        className={styles['logo']}
      />
    </footer>
  );
};
