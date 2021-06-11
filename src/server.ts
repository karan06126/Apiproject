import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import sendRouter from './routers/sendRouter';
import pool from './dbconfig/dbconnector';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect() {
        // tslint:disable-next-line:only-arrow-functions
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
          });
    }

    private routerConfig() {
        this.app.use('/Send', sendRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
                // tslint:disable-next-line:ban-types
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;