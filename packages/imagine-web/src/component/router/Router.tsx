import React, {ReactNode} from 'react';
import {Switch, Route, RouteProps} from 'wouter';

const routes: RouteProps[] = [];
let notFound: ReactNode;

export const Router = () => {
  return (
    <Switch>
      <>
        {routes.map(route => (
          <Route key={`route_${route.path}`} {...route} />
        ))}
      </>
      <>
        <Route>{notFound ?? '404'}</Route>
      </>
    </Switch>
  );
};

export const setURL = (url: string, component: ReactNode): void => {
  routes.push({
    path: `/${url}`,
    children: <>{component}</>,
  });
};

export const setNotFound = (component: ReactNode): void => {
  notFound = component;
};

export const getURLs = (): RouteProps[] => {
  return [...routes];
};
