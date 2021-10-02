import { FC, useEffect, useState } from 'react';

import IpotekaList from '../../components/ipotekaList/IpotekaList';
import ListForm from '../../components/listForm/ListForm';
import ListSort from '../../components/listSort/ListSort';
import { useActions } from '../../hooks/useActions';
import styles from './styles.module.css';

export interface ISearchParams {
  term?: number;
  purpose?: string;
  sortByAmount?: boolean;
}

const Main: FC = () => {
  const { fetchIpotekaList } = useActions();
  const [searchParams, setSearchParams] = useState<ISearchParams>({} as ISearchParams);
  const [isFirstFetchDone, setIsFirstFetchDone] = useState(false);

  useEffect(() => {
    fetchIpotekaList();
  }, []);

  useEffect(() => {
    if (isFirstFetchDone) submit(undefined, true);
    else setIsFirstFetchDone(true);
  }, [searchParams]);

  const submit = (dataPart: number = 0, rewriteItems: boolean = false) => {
    fetchIpotekaList(dataPart, rewriteItems, searchParams);
  };

  return (
    <div className={styles['main']}>
      <ListForm changeParams={setSearchParams} />
      <div className={styles['container']}>
        <ListSort changeParams={setSearchParams} />
        <IpotekaList submit={submit} />
      </div>
    </div>
  );
};

export default Main;
