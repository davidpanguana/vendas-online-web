import { createContext, useContext, useEffect, useState } from "react";
import { getAuthorizationToken, setAuthorizationToken } from "../functions/connections/auth";

type NotificationType = 'success' | 'info' | 'warning' | 'error';


interface NotificationProps{
    message?: string;
    type?: NotificationType;
    description?: string;
}

interface GlobalData{
    accessToken?: string;
    notification?: NotificationProps;
}

interface GlobalDataProps{
    globalData: GlobalData;
    setGlobalData: (data: GlobalData) => void;
}

export const GlobalContext = createContext({} as GlobalDataProps);

interface GlobalProviderProps{
    children: React.ReactNode
}

export function GlobalProvider({children}: GlobalProviderProps){
    const [globalData, setGlobalData] = useState<GlobalData>({})
    
    return(
        <GlobalContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
  const {globalData, setGlobalData} = useContext(GlobalContext);

  useEffect(() => {
    const token = getAuthorizationToken();
    if(token){
        setAccessToken(token);
    }else{
        setAccessToken('');
    }
  }, []);

  const setAccessToken = (accessToken: string) => {
    setAuthorizationToken(accessToken);
    setGlobalData({
        ...globalData,
        accessToken,
    });
  }

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
    
    return{
         accessToken: globalData?.accessToken,
         notification: globalData?.notification,
        setAccessToken,
        setNotification
    }
}