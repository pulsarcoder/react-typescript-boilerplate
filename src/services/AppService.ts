import { AccModel } from "../models/AppModels";

abstract class IAppService {
    public abstract getAccDetails(lineNo: string): AccModel[];
}

class AppService implements IAppService {
    public getAccDetails(lineNo: string): AccModel[] {
        return [];
    }
}