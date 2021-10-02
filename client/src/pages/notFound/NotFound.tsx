import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { RouteNames } from '../../routes';
import styles from './styles.module.css';
const NotFound: FC = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <img src="" alt="404" />
        <p>Упс, страница не найдена</p>
        <NavLink className={styles['button']} to={RouteNames.MAIN_PAGE}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
