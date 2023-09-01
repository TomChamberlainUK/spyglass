'use client';

import * as React from 'react';
import styles from '../styles/Button.module.scss';

export default function Button() {
  return (
    <button
      className={styles['button']}
      onClick={() => alert("boop")}
    >
      Boop
    </button>
  );
};
