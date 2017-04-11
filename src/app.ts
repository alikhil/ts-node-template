import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";

import helloRoute from "./routes/hello";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.initRoutes();
    }

    private initMiddlewares(): void {
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    private initRoutes(): void {
        const router = express.Router();
        router.get("/", async (request, response) => {
            response.json({
                message: "Hello World!",
            });
        });
        this.app.use("/", router);
        // attach other routes from ./routes dir
        this.app.use(helloRoute);

        // default error handling
        this.app.use((req, res) => {
            res.status(400).json({message: "page not found"});
        });
    }
}

export default new App().app;
