import axios, { type AxiosRequestConfig } from "axios";
import { MethodsEnum } from "../../enums/methods.enums";
import { ErrorMessages, HttpStatus } from "../../constants/errorStatus";
import { getAuthorizationToken } from "./auth";




const errorMessageByStatus: Record<number, string> = {
    [HttpStatus.BAD_REQUEST]: ErrorMessages.BAD_REQUEST,
    [HttpStatus.UNAUTHORIZED]: ErrorMessages.INVALID_CREDENTIALS,
    [HttpStatus.FORBIDDEN]: ErrorMessages.ACCESS_DENIED,
    [HttpStatus.NOT_FOUND]: ErrorMessages.NOT_FOUND,
    [HttpStatus.INTERNAL_SERVER_ERROR]: ErrorMessages.SERVER_ERROR,
};


export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';
export default class ConnectionAPI {
    
    static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
        
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: getAuthorizationToken(),
                "Content-Type": "application/json",
            },
        };
        switch(method) {
          case MethodsEnum.POST:
          case MethodsEnum.PUT:
          case MethodsEnum.PATCH:
            return (await axios[method]<T>(url, body, config)).data;
          case MethodsEnum.GET:
          case MethodsEnum.DELETE:
            return (await axios[method]<T>(url, config)).data;
          default:
            return((await axios[method](url, config)).data);
        }
            
    }

    static async connect<T>(url: string, method: MethodType, body?: any): Promise<T> {
    try {
        return await this.call<T>(url, method, body);
    } catch (error: any) {

        if (error.response) {
            const status = error.response.status;

            const message =
                error.response?.data?.message ||
                errorMessageByStatus[status] ||
                `Unexpected error: ${status}`;

            throw new Error(message);
        }

        throw new Error(error);
    }
}

};

export const connectAPIGET = async <T>(url: string): Promise<T> => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectAPIDELETE = async <T>(url: string): Promise<T> => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectAPIPOST = async <T>(url: string, body: any): Promise<T> => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
}
export const connectAPIPUT = async <T>(url: string, body: any): Promise<T> => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectAPIPATCH = async <T>(url: string, body: any) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};