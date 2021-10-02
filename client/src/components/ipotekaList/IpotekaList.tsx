import { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import EmptyList from '../emptyList/EmptyList';
import LoadingError from '../loadingError/LoadingError';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import ListItem from './listItem/ListItem';
import styles from './styles.module.css';

interface IpotekaListProps {
  submit: (dataPart?: number, rewriteItems?: boolean) => void;
}

const IpotekaList: FC<IpotekaListProps> = ({ submit }) => {
  const { isLoading, isLoadingMore, error, items, total } = useTypedSelector(
    (state) => state.ipotekaList,
  );
  const loadMore = () => {
    submit(Math.floor(items.length / 10));
  };
  return (
    <div>
      {isLoading ? (
        <div className={styles['alert-screen']}>
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className={styles['alert-screen']}>
          <LoadingError onBtnClick={submit} message={error} />
        </div>
      ) : (
        <>
          {items.length === 0 ? (
            <div className={styles['alert-screen']}>
              <EmptyList />
            </div>
          ) : (
            items.map((item) => <ListItem item={item} key={item.id} />)
          )}
          <div className={styles['load-more']}>
            {total > items.length ? (
              <button className={styles['load-more__btn']} onClick={loadMore}>
                {isLoadingMore
                  ? 'Загрузка...'
                  : `Загрузить ещё ${
                      total - items.length >= 10 ? 10 : total - items.length
                    } из ${total - items.length}`}
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default IpotekaList;
