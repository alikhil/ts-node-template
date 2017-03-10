export default <IConfig>require("./configs/" + (process.env.NODE_ENV || "development") + ".json");


export interface IDbConfig {
    databaseUrl: string;
}
interface IConfig {
    
    db: IDbConfig,
    port: number;
}