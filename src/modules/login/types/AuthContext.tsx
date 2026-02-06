import { createContext, useContext, useEffect, useState } from "react";
import type { UserType } from "./userType";
import { getAuthorizationToken, setAuthorizationToken, unsetAuthorizationToken } from "../../../shared/functions/connections/auth";
import { USER_URL } from "../../../shared/constants/url";
import { connectAPIGET } from "../../../shared/functions/connections/connection.API";

interface AuthContextType {
  user?: UserType;
  loading: boolean;
  login: (user: UserType, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = getAuthorizationToken();

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await connectAPIGET<UserType>(USER_URL);
        setUser(response);
      } catch {
        unsetAuthorizationToken();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (user: UserType, token: string) => {
    setAuthorizationToken(token);
    setUser(user);
  };

  const logout = () => {
    unsetAuthorizationToken();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
