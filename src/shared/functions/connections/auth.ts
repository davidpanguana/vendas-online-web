import { AUTHORIZATION_TOKEN_KEY } from "../../constants/authorizationConstant";
import { getItemStorage, removeItemStorage, setItemStorage } from "./storageProxy";


export const unsetAuthorizationToken = (): void => {
    removeItemStorage(AUTHORIZATION_TOKEN_KEY);
};

export const setAuthorizationToken = (token?: string): void => {
    if(token){
        setItemStorage(AUTHORIZATION_TOKEN_KEY, token);
    }else{
        unsetAuthorizationToken();
    };
};

export const getAuthorizationToken = (): string | null => {
    return getItemStorage(AUTHORIZATION_TOKEN_KEY);
};