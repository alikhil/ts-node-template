export default require("./configs/" + (process.env.NODE_ENV || "development") + ".json") as IConfig;

export interface IDbConfig {
    databaseUrl: string;
}
interface IConfig {

    db: IDbConfig;
    port: number;
}
