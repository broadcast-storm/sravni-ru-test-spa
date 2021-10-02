import React, { lazy } from 'react';

export interface IRoute {
  path?: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN_PAGE = '/',
  DETAILS_PAGE = '/:id',
}

const Main = lazy(() => import('../pages/main/Main'));
const Details = lazy(() => import('../pages/details/Details'));

export const routes: IRoute[] = [
  {
    path: RouteNames.MAIN_PAGE,
    exact: true,
    component: Main,
  },
  {
    path: RouteNames.DETAILS_PAGE,
    exact: true,
    component: Details,
  },
];
