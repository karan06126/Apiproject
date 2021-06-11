/*import pool from '../dbconfig/dbconnector';

  class SendController{
    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM send_db";
            const { rows } = await client.query(sql);
            const send_db = rows;

            client.release();

            res.send(send_db);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
export default SendController; */
// @ts-ignore
// tslint:disable-next-line:no-var-requires
const amqp = require('amqplib/callback_api');
// Step 1: Create Connection
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
//# sourceMappingURL=send.js.map