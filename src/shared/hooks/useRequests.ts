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
    const postRequest = async (url: string, data: any) =>{
        setLoading(true);
        return await connectAPIPOST(url, data)
        .then((response) => {
            setNotification(`login successful! welcome`, "success");
            return response;
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
        postRequest
    }
}