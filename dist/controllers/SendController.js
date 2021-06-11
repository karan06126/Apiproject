"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnector_1 = __importDefault(require("../dbconfig/dbconnector"));
class SendController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM Send";
                const { rows } = yield client.query(sql);
                const Send = rows;
                client.release();
                res.send(Send);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.default = SendController;
// @ts-ignore
// tslint:disable-next-line:no-var-requires
const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        const QUEUE = 'employment_details';
        channel.assertQueue(QUEUE);
        // Step 4: Send message to queue
        channel.sendToQueue(QUEUE, Buffer.from('hello this is karan'));
        console.log(`Message send ${QUEUE}`);
    });
});
//# sourceMappingURL=SendController.js.map