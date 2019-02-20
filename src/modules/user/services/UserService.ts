import { UserModel } from "../models/UserModel";
import Axios, { AxiosPromise } from 'axios';
import env from '../../../environment';
import { HttpService } from "../../../core/services/HttpService";

export abstract class IUserService {
    public abstract getUserDetails(username: string): AxiosPromise<UserModel>;
}

export class UserService extends HttpService implements IUserService {
    public getUserDetails(username: string): AxiosPromise<UserModel> {
        return this.get(env.config.apiUrl + '?username=' + username);
    }
}