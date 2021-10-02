import { FC } from 'react';

import styles from './styles.module.css';

interface LoadingErrorProps {
  message?: string;
  btnText?: string;
  onBtnClick: () => void;
}

const LoadingError: FC<LoadingErrorProps> = ({
  message = 'Произошла ошибка',
  btnText = 'Попробовать еще раз',
  onBtnClick,
}) => {
  return (
    <div className={styles['error-alert']}>
      <img
        src="/icons/warning.svg"
        alt="Ошибка"
        className={styles['error-alert__image']}
      />
      <div className={styles['error-alert__text']}>{message}</div>
      <button onClick={() => onBtnClick()} className={styles['error-alert__button']}>
        {btnText}
      </button>
    </div>
  );
};

export default LoadingError;
