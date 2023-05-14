const pool = require('../main').pool;

module.exports = class Account {
    id;
    email;
    password;
    fname;
    lname;
    address;

    async save() {
        if (this.id) {
            const query = `UPDATE Account SET email = '${this.email}', password = '${this.password}', fname = N'${this.fname}', lname = N'${this.lname}', address = N'${this.address}' WHERE id = '${this.id}'`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        } else {
            const query = `INSERT INTO Account (email, password, fname, lname, address) VALUES ('${this.email}', '${this.password}', N'${this.fname}', N'${this.lname}', N'${this.address}')`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        }
    }

    static async findById(id) {
        const query = `SELECT * FROM Account WHERE id = '${id}'`;
        console.log(query);
        const result = await pool.query(query);
        return result.recordset[0];
    }

    /**
     * 
     * @param {string} email 
     * @returns {Account}
     */
    static async findByEmail(email) {
        const query = `SELECT * FROM Account WHERE email = '${email}'`;
        console.log(query);
        const result = await pool.query(query);
        return result.recordset[0];
    }
}