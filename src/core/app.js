const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');

const dbLocal = {
    server: 'localhost',
    port: 1433,
    user: 'tripey',
    password: 'longmetmoivcl',
    database: 'tripey',
    options: {
        trustServerCertificate: true
    }
};
const dbTrippey = {
    server: '103.129.127.95',
    port: 1433,
    user: 'sa',
    password: 'Trippey@123',
    database: 'trippey',
    options: {
        trustServerCertificate: true
    }
};

module.exports = class App {
    app;

    /**
     * @type {sql.ConnectionPool}
     */
    pool;

    async init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/uploads', express.static(__dirname + '/../../uploads'));
        try {
            this.pool = await sql.connect(dbTrippey);
        } catch (err) {
            console.log(err);
        }
    }

    start() {
        this.app.listen(3000, () => {
            console.log('Server is running at port 3000');
        });
    }

    addHandler(method, path, handler, ...middlewares) {
        this.app[method](path, ...middlewares, handler);
    }

    constructor() {
        this.app = express();
    }
}