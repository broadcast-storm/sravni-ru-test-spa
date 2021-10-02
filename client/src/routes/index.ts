import React from 'react';

import Details from '../pages/details/Details';
import Main from '../pages/main/Main';

export interface IRoute {
  path?: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN_PAGE = '/',
  DETAILS_PAGE = '/:id',
}

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
