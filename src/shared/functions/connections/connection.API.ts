import axios from "axios";
import { MethodsEnum } from "../../enums/methods.enums";
import { ErrorStatus } from "../../constants/errorStatus";

export default class ConnectionAPI {
    
    static async call<T>(url: string, method: string, body?: any) {
        
        switch (method) {
            case MethodsEnum.GET:
                return (await axios.get<T>(url)).data;
            case MethodsEnum.DELETE:
                return (await axios.delete<T>(url)).data;
            case MethodsEnum.POST:
                return (await axios.post<T>(url, body)).data;
            case MethodsEnum.PUT:
                return (await axios.put<T>(url, body)).data;
            case MethodsEnum.PATCH:
                return (await axios.patch<T>(url, body)).data;
            default:
                throw new Error(`Method ${method} not supported`);
        }       
    }

    static async connect<T>(url: string, method: string, body?: any) {
        return await this.call<T>(url, method, body).catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new Error(ErrorStatus.BAD_REQUEST.toString());
                    case 401:
                        throw new Error(ErrorStatus.UNAUTHORIZED.toString());
                    case 403:
                        throw new Error(ErrorStatus.FORBIDDEN.toString());
                    case 404:
                        throw new Error(ErrorStatus.NOT_FOUND.toString());
                    case 500:
                        throw new Error(ErrorStatus.INTERNAL_SERVER_ERROR.toString());
                    default:
                        throw new Error(`Error: ${error.response.status}`);
                };
            };
        });
    };
};

export const connectAPIGET = async <T>(url: string) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectAPIDELETE = async <T>(url: string) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectAPIPOST = async <T>(url: string, body: any) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
}
export const connectAPIPUT = async <T>(url: string, body: any) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectAPIPATCH = async <T>(url: string, body: any) => {
    return await ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};