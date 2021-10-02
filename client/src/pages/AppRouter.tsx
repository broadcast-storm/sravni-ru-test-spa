import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { routes } from '../routes';
import NotFound from './notFound/NotFound';
import styles from './styles.module.css';

const AppRouter: FC = () => {
  return (
    <Suspense
      fallback={
        <div className={styles['wrapper']}>
          <LoadingSpinner />
        </div>
      }>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
