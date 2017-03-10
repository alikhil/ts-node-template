import * as http from "http";

import db from "./db";
import App from "./app";
import config from "./config";

const server = http.createServer(App);
server.listen(config.port);

db.connect(config.db)
    .then(() => console.log("connected to database"))
    .catch((err) => console.error(err));


server.on("listening", () => {
    let address = server.address();
    let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
    console.log(`Listening on ${bind}`);
});