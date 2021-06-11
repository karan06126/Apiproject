import express, { Router } from 'express';
// @ts-ignore
import SendController from "../controllers/SendController";

const router = Router();
const sendController = new SendController();

router.get('/', sendController.get);

export default router;