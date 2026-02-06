import {useState} from "react";
import axios from "axios";
import { useGlobalContext } from "./useGlobalContext";
import { connectAPIPOST } from "../functions/connections/connection.API";
import { AUTH_URL } from "../constants/url";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/screens/routes";
import { setAuthorizationToken } from "../functions/connections/auth";
import type { AuthType } from "../../modules/login/types/authType";
import { FirstScreenRoutesEnum } from "../../modules/firstScreen/routes";

export const useRequests = () =>{
    const [loading, setLoading] = useState(false);
    const {setNotification, setUser} = useGlobalContext();
    const navigate = useNavigate();

    const getRequest = async (url: string) =>{
        setLoading(true);
        return await axios({
            method: 'get',
            url:  url,
        })
        .then((response) => {
            return response.data;
        })
        .catch(() =>{
            alert("Error on get request")
        })
        .finally(() => {
            setLoading(false);
        });
    }
    const postRequest = async <T>(url: string, data: any):Promise<T | undefined> => {
        setLoading(true);
        return await connectAPIPOST<T>(url, data)
        .then((response) => {
            setNotification(`login successful! welcome`, "success");
            return response;
        })
        .catch((error) =>{
            setNotification(error.message, "error");
            return undefined;
        })
        .finally(() => {
            setLoading(false);
        });
    }
    const authRequest = async ( body: any):Promise<void> => {
        setLoading(true);
        await connectAPIPOST<AuthType>(AUTH_URL, body)
        .then((response) => {
            console.log(response);
            setAuthorizationToken(response.accessToken);
            setUser(response.user);
            navigate(FirstScreenRoutesEnum.FIRST_SCREEN);
            setNotification(`loading...`, "success");
        })
        .catch((error) =>{
            setNotification(error.message, "error");
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return {
        loading,
        getRequest,
        postRequest,
        authRequest
    }
}