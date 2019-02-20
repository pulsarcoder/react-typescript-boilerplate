import Axios, { AxiosPromise } from "axios";

export abstract class HttpService {
    public get<T>(url: string): AxiosPromise<T> {
        return Axios.get(url);
    }
}