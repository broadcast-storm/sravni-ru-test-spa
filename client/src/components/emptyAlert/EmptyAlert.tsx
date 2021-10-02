import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { RouteNames } from '../../routes';
import styles from './styles.module.css';

interface EmptyAlertProps {
  message?: string;
  showLinkToMainPage?: boolean;
}

const EmptyAlert: FC<EmptyAlertProps> = ({
  message = 'Извините, по вашему запросу ничего не найдено',
  showLinkToMainPage = false,
}) => {
  return (
    <div className={styles['empty-alert']}>
      <img
        src="/icons/sad.svg"
        alt="Грустненько"
        className={styles['empty-alert__image']}
      />
      <div className={styles['empty-alert__text']}>{message}</div>
      {showLinkToMainPage ? (
        <NavLink to={RouteNames.MAIN_PAGE} className={styles['empty-alert__nav-btn']}>
          На главную
        </NavLink>
      ) : null}
    </div>
  );
};

export default EmptyAlert;
