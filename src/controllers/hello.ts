import * as express from 'express';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import { message } from 'gulp-typescript/release/utils';

class HelloController {
    public async hello(req: Request, res: Response, next: NextFunction) {
        res.json({ message: "Hello, world!" });
    }
}

export default new HelloController();
