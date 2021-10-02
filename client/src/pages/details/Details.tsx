import { FC, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import EmptyAlert from '../../components/emptyAlert/EmptyAlert';
import LoadingError from '../../components/loadingError/LoadingError';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../routes';
import sklonenie from '../../utils/sklonenie';
import styles from './styles.module.css';

interface RouteParams {
  id: string;
}

const Details: FC = () => {
  const { id } = useParams<RouteParams>();
  const { fetchIpotekaDetails, clearDetailsState } = useActions();
  const { isLoading, errorDetails, details } = useTypedSelector(
    (state) => state.ipotekaDetails,
  );
  useEffect(() => {
    fetchIpotekaDetails(id);
    return () => {
      clearDetailsState();
    };
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
          <>
            <div className={styles['header-container']}>
              <h1 className={styles['header']}>
                Ипотека «{details.name}» от {details.organization.name}
              </h1>
              <div className={styles['logo-container']}>
                <img
                  src={process.env.REACT_APP_API_URL + details.organization.customLogoUrl}
                  alt={details.organization.name}
                  className={styles['image']}
                />
              </div>
            </div>
            <div className={styles['params-container']}>
              <div className={styles['params-item']}>
                <div className={styles['params-item__title']}>
                  <img
                    src="/icons/discount.svg"
                    alt="%"
                    className={styles['title-image']}
                  />{' '}
                  <span className={styles['title-text']}>Процентная ставка</span>
                </div>
                <div className={styles['params-item__value']}>
                  от {details.rate.periods[0].rate.from}%{' '}
                  {details.rate.periods[0].rate.to &&
                  details.rate.periods[0].rate.to !== details.rate.periods[0].rate.from
                    ? `- ${details.rate.periods[0].rate.to}%`
                    : null}
                </div>
              </div>
              <div className={styles['params-item']}>
                <div className={styles['params-item__title']}>
                  <img
                    src="/icons/coins.svg"
                    alt="money"
                    className={styles['title-image']}
                  />{' '}
                  <span className={styles['title-text']}>Сумма кредита</span>
                </div>
                <div className={styles['params-item__value']}>
                  от {details.rate.creditAmount.from} ₽
                  {details.rate.creditAmount.to
                    ? `до ${details.rate.creditAmount.to} ₽`
                    : null}
                </div>
              </div>
              <div className={styles['params-item']}>
                <div className={styles['params-item__title']}>
                  <img
                    src="/icons/calendar.svg"
                    alt="calendar"
                    className={styles['title-image']}
                  />{' '}
                  <span className={styles['title-text']}>Срок</span>
                </div>
                <div className={styles['params-item__value']}>
                  {Math.floor(details.rate.periods[0].term.from / 12)}{' '}
                  {sklonenie(Math.floor(details.rate.periods[0].term.from / 12), [
                    'год',
                    'года',
                    'лет',
                  ])}{' '}
                  - {Math.floor(details.rate.periods[0].term.to / 12)}{' '}
                  {sklonenie(Math.floor(details.rate.periods[0].term.to / 12), [
                    'год',
                    'года',
                    'лет',
                  ])}
                </div>
              </div>
              <div className={styles['params-item']}>
                <div className={styles['params-item__title']}>
                  <img
                    src="/icons/coins.svg"
                    alt="money2"
                    className={styles['title-image']}
                  />{' '}
                  <span className={styles['title-text']}>Первоначальный взнос</span>
                </div>
                <div className={styles['params-item__value']}>
                  от {details.rate.initialAmount.from}%
                </div>
              </div>
              <div className={styles['params-item']}>
                <div className={styles['params-item__title']}>
                  <img
                    src="/icons/user.svg"
                    alt="user"
                    className={styles['title-image']}
                  />{' '}
                  <span className={styles['title-text']}>Возраст заёмщика</span>
                </div>
                <div className={styles['params-item__value']}>
                  от {details.customerRequirements.age}{' '}
                  {sklonenie(Math.floor(details.customerRequirements.age), [
                    'года',
                    'лет',
                    'лет',
                  ])}
                </div>
              </div>
            </div>
            <div className={styles['conditions-container']}>
              <h2 className={styles['conditions-container__title']}>Подробные условия</h2>
              <div className={styles['conditions-container__item']}>
                <div className={styles['item-name']}>Возраст при погашении</div>
                <div className={styles['item-value']}>
                  до {details.customerRequirements.manAgeAtRepayment}{' '}
                  {sklonenie(Math.floor(details.customerRequirements.manAgeAtRepayment), [
                    'года',
                    'лет',
                    'лет',
                  ])}
                </div>
              </div>
              <div className={styles['conditions-container__item']}>
                <div className={styles['item-name']}>Общий стаж работы</div>
                <div className={styles['item-value']}>
                  от {details.customerRequirements.fullExperience}{' '}
                  {sklonenie(Math.floor(details.customerRequirements.manAgeAtRepayment), [
                    'месяца',
                    'месяцев',
                    'месяцев',
                  ])}
                </div>
              </div>
              <div className={styles['conditions-container__item']}>
                <div className={styles['item-name']}>Доход</div>
                <div className={styles['item-value']}>Постоянный</div>
              </div>
            </div>
            <NavLink to={RouteNames.MAIN_PAGE} className={styles['nav-btn']}>
              На главную
            </NavLink>
          </>
        )}
      </div>{' '}
    </div>
  );
};

export default Details;
