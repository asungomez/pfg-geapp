import { ValidLanguage } from '@/i18n';

const routeNames = ['users'] as const;
export type RouteName = (typeof routeNames)[number];

type RouteTranslations = { [lang in ValidLanguage]: string };
export const routes: {
  [name in RouteName]: RouteTranslations;
} = {
  users: {
    es: 'usuarios',
    en: 'users',
  },
} as const;

export const getRouteName = (
  name: string,
  language: ValidLanguage,
): RouteName | null => {
  for (const routeName in routes) {
    if (Object.prototype.hasOwnProperty.call(routes, routeName)) {
      const route = routes[routeName as RouteName];
      if (route[language] === name) {
        return routeName as RouteName;
      }
    }
  }
  return null;
};

export const getLocalizedRoute = (name: RouteName, language: ValidLanguage) => {
  return routes[name][language];
};
