import { FC } from 'react';

import styles from './styles.module.css';

const EmptyList: FC = () => {
  return (
    <div className={styles['empty-alert']}>
      <img
        src="/icons/sad.svg"
        alt="Грустненько"
        className={styles['empty-alert__image']}
      />
      <div className={styles['empty-alert__text']}>
        Извините, по вашему запросу ничего не найдено
      </div>
    </div>
  );
};

export default EmptyList;
