import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IIpoteka } from '../../../models/IIpoteka';
import sklonenie from '../../../utils/sklonenie';
import styles from './styles.module.css';

interface ListItemProps {
  item: IIpoteka;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const getTerm = () => {
    const term = item.rate.periods[0].term.to;
    const unit = item.rate.periods[0].termUnit;
    if (term < 12 && unit === 'month') {
      return `${term} ${sklonenie(term, ['месяц', 'месяца', 'месяцев'])}`;
    }
    return `${Math.floor(term / 12)} ${sklonenie(Math.floor(term / 12), [
      'года',
      'лет',
      'лет',
    ])}`;
  };
  return (
    <div className={styles['item']}>
      <div className={styles['item__column']}>
        <div className={styles['item__logo']}>
          <img
            className={styles['img']}
            src={process.env.REACT_APP_API_URL + item.organization.customLogoUrl}
            alt={item.organization.name}
          />
        </div>
      </div>
      <div className={styles['item__column']}>
        <div className={styles['item__rate-info']}>
          <span className={styles['percents']}>от {item.rate.periods[0].rate.from}%</span>
          <span className={styles['subtext']}>{item.name}</span>
        </div>
      </div>
      <div className={classNames(styles['item__column'], styles['amount-column'])}>
        <div className={styles['item__term-info']}>
          <span className={styles['amount']}>
            от {item.rate.creditAmount.from} ₽
            {item.rate.creditAmount.to ? `до ${item.rate.creditAmount.to} ₽` : null}
          </span>
          <span className={styles['term']}>на срок до {getTerm()}</span>
        </div>
      </div>
      <div className={styles['item__column']}>
        <div className={styles['item__requirements']}>
          <span className={styles['param']}>
            Возраст от {item.customerRequirements.age}{' '}
            {sklonenie(item.customerRequirements.age, ['года', 'лет', 'лет'])}
          </span>
          <span className={styles['param']}>
            Стаж от {item.customerRequirements.lastExperience}{' '}
            {sklonenie(item.customerRequirements.lastExperience, [
              'месяца',
              'месяцев',
              'месяцев',
            ])}
          </span>
          <span className={styles['param']}>
            {item.customerRequirements.documents}{' '}
            {sklonenie(item.customerRequirements.documents, [
              'документ',
              'документа',
              'документов',
            ])}
          </span>
        </div>
      </div>
      <div className={styles['item__column']}>
        <NavLink to={`/${item.id}`} className={styles['item__link']}>
          подробнее
        </NavLink>
      </div>
    </div>
  );
};

export default ListItem;
