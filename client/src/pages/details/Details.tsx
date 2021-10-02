import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import EmptyAlert from '../../components/emptyAlert/EmptyAlert';
import LoadingError from '../../components/loadingError/LoadingError';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.css';

interface RouteParams {
  id: string;
}

const Details: FC = () => {
  const { id } = useParams<RouteParams>();
  const { fetchIpotekaDetails } = useActions();
  const { isLoading, errorDetails, details } = useTypedSelector(
    (state) => state.ipotekaDetails,
  );
  useEffect(() => {
    fetchIpotekaDetails(id);
  }, []);
  return (
    <div className={styles['wrapper']}>
      {' '}
      <div className={styles['container']}>
        {isLoading ? (
          <div className={styles['alert-screen']}>
            <LoadingSpinner />
          </div>
        ) : errorDetails ? (
          <div className={styles['alert-screen']}>
            <LoadingError
              onBtnClick={() => fetchIpotekaDetails(id)}
              message={errorDetails}
            />
          </div>
        ) : details === null ? (
          <div className={styles['alert-screen']}>
            <EmptyAlert />
          </div>
        ) : (
          JSON.stringify(details)
        )}
      </div>{' '}
    </div>
  );
};

export default Details;
