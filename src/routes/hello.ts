import {Router} from "express";
import helloController from "../controllers/hello";

let router = Router();

router.get("/hello", helloController.hello);

export default router;