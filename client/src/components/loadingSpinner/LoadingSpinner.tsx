import { FC } from 'react';

import styles from './styles.module.css';

const LoadingSpinner: FC = () => {
  return <div className={styles['spinner']}></div>;
};

export default LoadingSpinner;
