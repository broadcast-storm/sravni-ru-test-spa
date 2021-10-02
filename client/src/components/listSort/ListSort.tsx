import classNames from 'classnames';
import { FC, useState } from 'react';

import { ISearchParams } from '../../pages/main/Main';
import styles from './styles.module.css';

interface ListSortProps {
  changeParams: (
    value: ISearchParams | ((prevState: ISearchParams) => ISearchParams),
  ) => void;
}

const ListSort: FC<ListSortProps> = ({ changeParams }) => {
  const [sortType, setSortType] = useState('byRate');
  const switchType = (newType: string) => {
    if (sortType !== newType) {
      setSortType(newType);
      changeParams((prevState) => {
        return { ...prevState, sortByAmount: newType === 'byAmount' ? true : undefined };
      });
    }
  };
  return (
    <div className={styles['sort']}>
      <span className={styles['sort__header']}>Сортировать:</span>
      <span
        className={classNames(
          styles['sort__type-item'],
          sortType === 'byRate' ? styles['sort__type-item_active'] : null,
        )}
        onClick={() => switchType('byRate')}>
        по ставке
      </span>
      <span
        className={classNames(
          styles['sort__type-item'],
          sortType === 'byAmount' ? styles['sort__type-item_active'] : null,
        )}
        onClick={() => switchType('byAmount')}>
        по сумме
      </span>
    </div>
  );
};

export default ListSort;
