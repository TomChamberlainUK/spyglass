import * as React from 'react';
import styles from '../styles/Card.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const Card = ({ children }: Props) => {
  return (
    <div className={styles['container']}>
      <h1>Card</h1>
      {children}
    </div>
  );
};
