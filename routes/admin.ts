import express, { Request, Response, NextFunction } from "express";
import * as adminController from "../controller/admin";

const router = express.Router();

router.get(" /admin", adminController.getAdmin);
router.post(" /admin", adminController.createAdmin);

export default router;
