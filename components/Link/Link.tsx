import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useI18n } from '@/context/I18n/I18nContext';
import { getLocalizedRoute, RouteName } from '@/routes/localizedRoutes';

type LinkProps = {
  to: RouteName;
  children?: ReactNode;
};
export const Link: FC<LinkProps> = ({ to, children }) => {
  const { currentLanguage } = useI18n();

  if (!currentLanguage) {
    return null;
  }

  const localizedRoute = getLocalizedRoute(to, currentLanguage);
  const destination = `${currentLanguage}/${localizedRoute}`;

  return (
    <ChakraLink href={destination} as={NextLink}>
      {children}
    </ChakraLink>
  );
};
