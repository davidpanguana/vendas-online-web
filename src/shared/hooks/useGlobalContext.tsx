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
    setGlobalData({
        ...globalData,
        user,
    });
  }
    
    return{
         notification: globalData?.notification,
         user: globalData?.user,
        setNotification,
        setUser
    }
}