import { FC, useState } from 'react';

import { ISearchParams } from '../../pages/main/Main';
import { aliases } from '../../utils/aliases';
import { terms } from '../../utils/terms';
import styles from './styles.module.css';

interface ListFormProps {
  changeParams: (
    value: ISearchParams | ((prevState: ISearchParams) => ISearchParams),
  ) => void;
}

const ListForm: FC<ListFormProps> = ({ changeParams }) => {
  const [purpose, setPurpose] = useState('');
  const [term, setTerm] = useState('');
  const handleSubmit = () => {
    changeParams((prevState) => {
      let newState = { ...prevState };
      if (purpose !== '') newState.purpose = purpose;
      else delete newState.purpose;
      if (term !== '') newState.term = parseInt(term, 10);
      else delete newState.term;
      return newState;
    });
  };

  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['header']}>Ипотечный калькулятор</h1>
      <div className={styles['form']}>
        <div className={styles['form__item']}>
          <label htmlFor="purpose" className={styles['label']}>
            Цель ипотеки
          </label>
          <select
            id="purpose"
            className={styles['input']}
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}>
            <option value="">Любая</option>
            {aliases.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles['form__item']}>
          <label htmlFor="term" className={styles['label']}>
            Срок
          </label>
          <select
            id="term"
            className={styles['input']}
            value={term}
            onChange={(event) => setTerm(event.target.value)}>
            <option value="">Любой</option>
            {terms.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles['form__item']}>
          <button className={styles['button']} onClick={handleSubmit}>
            Показать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
