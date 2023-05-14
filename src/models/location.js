const pool = require('../main').pool;

module.exports = class Location {
    id;
    name;
    img;

    async save() {
        if (this.id) {
            const query = `UPDATE Location SET name = N'${this.name}', img = N'${this.img}' WHERE id = '${this.id}'`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        } else {
            const query = `INSERT INTO Location (name, img) VALUES (N'${this.name}', N'${this.img}');`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        }
    }

    static async findAll() {
        const query = 'SELECT * FROM Location';
        const result = await pool.query(query);
        return result.recordset;
    }

    static async findById(id) {
        const query = `SELECT * FROM Location WHERE id = '${id}'`;
        const result = await pool.query(query);
        if (!result.recordset[0]) return null;
        const location = new Location();
        location.id = result.recordset[0].id;
        location.name = result.recordset[0].name;
        location.img = result.recordset[0].img;
        return location;
    }

    static async deleteById(id) {
        const query = `DELETE FROM Location WHERE id = '${id}'`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }
}