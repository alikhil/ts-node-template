import * as http from "http";

import App from "./app";
import config from "./config";
import db from "./db";

const server = http.createServer(App);
server.listen(config.port);

db.connect(config.db)
    .then(() => console.log("connected to database"))
    .catch((err) => console.error(err));

server.on("listening", () => {
    const address = server.address();
    const bind = (typeof address === "string") ? `pipe ${address}` : `port ${address.port}`;
    console.log(`Listening on ${bind}`);
});
