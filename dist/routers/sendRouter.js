"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// @ts-ignore
const SendController_1 = __importDefault(require("../controllers/SendController"));
const router = express_1.Router();
const sendController = new SendController_1.default();
router.get('/', sendController.get);
exports.default = router;
//# sourceMappingURL=sendRouter.js.map