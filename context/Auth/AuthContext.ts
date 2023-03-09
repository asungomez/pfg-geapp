import { CognitoUserWithAttributes } from '@/services/authenticationService';
import { createContext, useContext } from 'react';

export type AuthContextType = {
  authStatus: 'checking' | 'authenticated' | 'unauthenticated';
  logOut: () => Promise<void>;
  user: CognitoUserWithAttributes | null;
};

export const AuthContext = createContext<AuthContextType>({
  authStatus: 'checking',
  logOut: async () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);
