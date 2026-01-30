import {useState} from "react";
import axios from "axios";
import { useGlobalContext } from "./useGlobalContext";
import { connectAPIPOST } from "../functions/connections/connection.API";

export const useRequests = () =>{
    const [loading, setLoading] = useState(false);
    const {setNotification} = useGlobalContext();

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

    return {
        loading,
        getRequest,
        postRequest
    }
}