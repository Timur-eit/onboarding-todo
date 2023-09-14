import { Router } from 'router5';
import { findRouteObject } from './_utils/find-route-object';

type ParamsType = {
  routeName: string;
  router: Router;
};

// eslint-disable-next-line import/no-unused-modules
export const routerPrefetcher = ({ router, routeName }: ParamsType) => {
  const { routes } = router.getDependencies();

  const routeObject = findRouteObject({ routes, routeName });

  if (routeObject && routeObject.loadAction) {
    routeObject.loadAction();
  }
};
