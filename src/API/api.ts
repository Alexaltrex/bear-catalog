import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/',
    //withCredentials: true,
});

export type ResponseTypeAPI<D = {}> = {
    status: number
    data: D
    statusText: string
    }



