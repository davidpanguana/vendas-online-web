import {useState} from "react";
import { useGlobalContext } from "./useGlobalContext";
import ConnectionAPI, { connectAPIPOST, type MethodType } from "../functions/connections/connection.API";
import { AUTH_URL } from "../constants/url";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/screens/routes";
import { setAuthorizationToken } from "../functions/connections/auth";
import type { AuthType } from "../../modules/login/types/authType";

export const useRequests = () =>{
    const [loading, setLoading] = useState(false);
    const {setNotification, setUser} = useGlobalContext();
    const navigate = useNavigate();

    const request = async <T>(
        url: string,
        method: MethodType,
        sevGlobal?: (Object: T) => void,
        body?: unknown
    ): Promise<T| undefined> =>{
        setLoading(true);
        const returnObject: T | undefined   = await ConnectionAPI.connect <T> (url, method, body)
        .then((response) => {
            if(sevGlobal){
                sevGlobal(response);
            }
            return response;
        })
        .catch((error:Error) =>{
            setNotification({
                message: error.message,
                type: "error",
            });
           return undefined
        })
        .finally(() => {
            setLoading(false);
            return undefined;
        });
        return returnObject;
    }
    const postRequest = async <T>(url: string, data: any):Promise<T | undefined> => {
        setLoading(true);
        return await connectAPIPOST<T>(url, data)
        .then((response) => {
            setNotification({
                message: "Login successful! Welcome",
                type: "success",
            });

            return response;
        })
        .catch((error) =>{
            setNotification({
                message: error.message,
                type: "error",
            });
            return undefined;
        })
        .finally(() => {
            setLoading(false);
        });
    }
   const authRequest = async (body: any): Promise<void> => {
  setLoading(true);

  try {
    const response = await connectAPIPOST<AuthType>(AUTH_URL, body);

    setAuthorizationToken(response.accessToken);
    setUser(response.user);
    navigate(ProductRoutesEnum.PRODUCT);
  } catch (error: any) {
    setNotification({
        message: error.message,
        type: "error",
    });

  } finally {
    setLoading(false);
  }
};


    return {
        loading,
        request,
        postRequest,
        authRequest
    }
}