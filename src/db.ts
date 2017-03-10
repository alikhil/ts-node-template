import {IDbConfig} from "./config";

module Db {

    export async function connect(config: IDbConfig) {
        return new Promise(resolve => resolve() );
    } 
}
export default Db;