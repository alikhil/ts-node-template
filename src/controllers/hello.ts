import * as express from "express";
import {Request, Response, NextFunction} from "express-serve-static-core";

module HelloController {
    export async function hello(req: Request, res: Response, next: NextFunction) {
        res.json("Hello from controller!");        
    }
}

export default HelloController;