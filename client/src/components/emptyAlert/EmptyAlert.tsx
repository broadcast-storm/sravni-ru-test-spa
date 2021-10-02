import { FC } from 'react';

import styles from './styles.module.css';

interface EmptyAlertProps {
  message?: string;
}

const EmptyAlert: FC<EmptyAlertProps> = ({
  message = 'Извините, по вашему запросу ничего не найдено',
}) => {
  return (
    <div className={styles['empty-alert']}>
      <img
        src="/icons/sad.svg"
        alt="Грустненько"
        className={styles['empty-alert__image']}
      />
      <div className={styles['empty-alert__text']}>{message}</div>
    </div>
  );
};

export default EmptyAlert;
