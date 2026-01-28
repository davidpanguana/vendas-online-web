import { createContext, useContext, useState } from "react";

interface GlobalData{
    accessToken?: string;
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
    
    return{
         accessToken: globalData?.accessToken,
        setAccessToken,
    }
}