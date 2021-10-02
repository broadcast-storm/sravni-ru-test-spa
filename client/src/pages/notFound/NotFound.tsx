import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { RouteNames } from '../../routes';
import styles from './styles.module.css';
const NotFound: FC = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <img src="/icons/404.svg" alt="404" className={styles['image']} />
        <p className={styles['text']}>Упс, страница не найдена</p>
        <NavLink className={styles['button']} to={RouteNames.MAIN_PAGE}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
