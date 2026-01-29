import { createContext, useContext, useState } from "react";

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

  const setAccessToken = (accessToken: string) => {
    setGlobalData({
        ...globalData,
        accessToken,
    });
  }

  const setNotification = (message: string, type: NotificationType, description: string) => {
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