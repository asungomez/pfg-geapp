import {
  CognitoUserWithAttributes,
  getAuthenticatedUser,
  logOut as logOutRequest,
} from '@/services/authenticationService';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<
    'checking' | 'authenticated' | 'unauthenticated'
  >('checking');
  const [user, setUser] = useState<CognitoUserWithAttributes | null>(null);

  useEffect(() => {
    if (authStatus === 'checking') {
      getAuthenticatedUser()
        .then((user) => {
          setUser(user);
          setAuthStatus('authenticated');
        })
        .catch(() => {
          setAuthStatus('unauthenticated');
        });
    }
  }, [authStatus]);

  const logOut = async () => {
    await logOutRequest();
    setAuthStatus('unauthenticated');
  };

  const authContext: AuthContextType = useMemo(
    () => ({ authStatus, logOut, user }),
    [authStatus, user],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
