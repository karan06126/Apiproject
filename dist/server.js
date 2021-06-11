"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// @ts-ignore
const sendRouter_1 = __importDefault(require("./routers/sendRouter"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                    // tslint:disable-next-line:ban-types
                }).on('error', (err) => reject(err));
            });
        };
        this.app = express_1.default();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: '1mb' })); // 100kb default
    }
    dbConnect() {
        // tslint:disable-next-line:only-arrow-functions
        dbconnector_1.default.connect(function (err, client, done) {
            if (err)
                throw new Error(err);
            console.log('Connected');
        });
    }
    routerConfig() {
        this.app.use('/Send', sendRouter_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map