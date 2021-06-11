"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    max: 20,
    // connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    connectionString: 'postgres://postgres:admin@localhost:5432/karanDb',
    idleTimeoutMillis: 30000
});
exports.default = pool;
//# sourceMappingURL=dbconnector.js.map