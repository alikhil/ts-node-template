import { IDbConfig } from "./config";

class Db {

    public async connect(config: IDbConfig) {
        return new Promise((resolve) => resolve());
    }
}
export default new Db();
