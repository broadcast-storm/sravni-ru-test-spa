import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import styles from './styles.module.css';

interface RouteParams {
  id: string;
}

const Details: FC = () => {
  const { id } = useParams<RouteParams>();
  const { fetchIpotekaDetails } = useActions();
  useEffect(() => {
    fetchIpotekaDetails(parseInt(id, 10));
  }, []);
  return <div className={styles['main']}>Детали конкретной ипотеки</div>;
};

export default Details;
