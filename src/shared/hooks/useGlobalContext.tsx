import { createContext, useContext,useEffect,useState } from "react";
import type { UserType } from "../../modules/login/types/userType";
import { getAuthorizationToken, unsetAuthorizationToken } from "../functions/connections/auth";
import { connectAPIGET } from "../functions/connections/connection.API";
import { USER_URL } from "../constants/url";



type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message?: string;
  type?: NotificationType;
  description?: string;
}

interface GlobalContextProps {
  user?: UserType;
  loading: boolean;
  notification?: NotificationProps;
  setUser: (user?: UserType) => void;
  setNotification: (notification?: NotificationProps) => void;
}


const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
    children: React.ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<NotificationProps | undefined>(undefined);

  useEffect(() => {
    const validateUser = async () => {
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
        setUser(undefined);
      } finally {
        setLoading(false);
      }
    };

    validateUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loading,
        notification,
        setNotification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};



export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
