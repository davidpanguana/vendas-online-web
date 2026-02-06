import { createContext, useContext, useEffect, useState } from "react";
import type { UserType } from "../../modules/login/types/userType";

type NotificationType = 'success' | 'info' | 'warning' | 'error';


interface NotificationProps{
    message?: string;
    type?: NotificationType;
    description?: string;
}

interface GlobalData{
    accessToken?: string;
    notification?: NotificationProps;
    user?: UserType;
}

import type { Dispatch, SetStateAction } from "react";
import { getAuthorizationToken, unsetAuthorizationToken } from "../functions/connections/auth";
import { connectAPIGET } from "../functions/connections/connection.API";
import { USER_URL } from "../constants/url";

interface GlobalDataProps{
    globalData: GlobalData;
    setGlobalData: Dispatch<SetStateAction<GlobalData>>;
}


export const GlobalContext = createContext({} as GlobalDataProps);

interface GlobalProviderProps{
    children: React.ReactNode
}

export function GlobalProvider({children}: GlobalProviderProps){
    const [globalData, setGlobalData] = useState<GlobalData>({})

      useEffect(() => {
    const loadUser = async () => {
      const token = getAuthorizationToken();

      if (token) {
        try {
          const user = await connectAPIGET<UserType>(USER_URL);
          setGlobalData(prev => ({
            ...prev,
            user,
          }));
        } catch {
          unsetAuthorizationToken();
        }
      }
    };

    loadUser();
  }, []);
    
    return(
        <GlobalContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
  const {globalData, setGlobalData} = useContext(GlobalContext);

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
        ...globalData,
        notification: {
            message,
            type,
            description
        }
    });
  }
  const setUser = (user:UserType) => {
    setGlobalData(prev => ({
        ...prev,
        user,
        }));

  }
    
    return{
         notification: globalData?.notification,
         user: globalData?.user,
        setNotification,
        setUser
    }
}