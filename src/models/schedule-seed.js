const ScheduleSeedPlace = require('./schedule-seed-place');

const pool = require('../main').pool;

module.exports = class ScheduleSeed {
    id;
    locationId;
    description;
    note;
    noDays;
    totalPrice;

    async save() {
        if (this.id) {
            const query = `UPDATE ScheduleSeed SET locationId = ${this.locationId}, description = '${this.description}', note = '${this.note}', noDays = ${this.noDays}, totalPrice = ${this.totalPrice} WHERE id = '${this.id}'`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        } else {
            const query = `INSERT INTO ScheduleSeed (locationId, description, note, noDays, totalPrice) VALUES (${this.locationId}, '${this.description}', '${this.note}', ${this.noDays}, ${this.totalPrice});`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        }
    }

    static async findAll() {
        const query = 'SELECT * FROM ScheduleSeed';
        console.log(query);
        const result = await pool.query(query);
        return result.recordset;
    }

    static async deleteById(id) {
        await ScheduleSeedPlace.deleteByScheduleSeedId(id);
        const query = `DELETE FROM ScheduleSeed WHERE id = ${id}`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }
}