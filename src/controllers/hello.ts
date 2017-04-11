import * as express from "express";
import {NextFunction, Request, Response} from "express-serve-static-core";

class HelloController {
    public async hello(req: Request, res: Response, next: NextFunction) {
        res.json("Hello from controller!");
    }
}

export default HelloController;
