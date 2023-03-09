'use client';
import { AuthProvider } from '@/context/Auth/AuthProvider';
import { I18nProvider } from '@/context/I18n/I18nProvider';
import { useAmplify } from '@/hooks/useAmplify';
import { Flex } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { dictionaries } from './dictionaries';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAmplify();
  return (
    <I18nProvider dictionaries={dictionaries}>
      <AuthProvider>
        <Flex direction="column" align="center">
          <Header />
          {children}
        </Flex>
      </AuthProvider>
    </I18nProvider>
  );
}
