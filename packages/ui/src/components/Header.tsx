import * as React from 'react';
import styles from '../styles/Header.module.scss';
import BBCLogo from '../images/BBC_Logo_Black_RGB.svg';

export default function Header() {
  return (
    <header className={styles['container']}>
      <img
        src={BBCLogo.src}
        alt={'BBC logo'}
        className={styles['logo']}
      />
    </header>
  );
};
