import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from '../styles/components/Tooltip.module.scss';

type Props = {
  isVisible?: boolean;
  children: ReactNode;
  position: {
    left: number;
    top: number;
  }
}


export default function Tooltip({ isVisible, children, position }) {
  const tooltipRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!tooltipRef) return;
    tooltipRef.current.style.left = `${position.left}px`;
    tooltipRef.current.style.top = `calc(${position.top}px + 1rem`;
  }, [position, position]);

  return (
    <div
      ref={tooltipRef}
      className={
        classNames(
          styles['container'],
          { [styles['container--is-visible']]: isVisible }
        )
      }
    >
      <div className={styles['arrow']} />
      {children}
    </div>
  );
}
