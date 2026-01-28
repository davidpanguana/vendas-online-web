import {useState} from "react";
import axios from "axios";

export const useRequests = () =>{
    const [loading, setLoading] = useState(false);

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
        return await axios({
            method: 'post',
            url:  url,
            data: data,
        })
        .then((response) => {
            alert(`login successful! welcome`);
            return response.data;
        })
        .catch(() =>{
            alert("user or password incorrect")
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