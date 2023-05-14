const pool = require('../main').pool;

module.exports = class ScheduleSeedPlace {
    id;
    scheduleSeedId;
    placeId;
    description;
    note;
    time;

    /**
     * 
     * @param {[ScheduleSeedPlace]} places 
     */
    static async insertMany(places) {
        const query = `INSERT INTO ScheduleSeedPlace (scheduleSeedId, placeId, description, note, time) VALUES ${places.map(place => `(${place.scheduleSeedId}, ${place.placeId}, '${place.description}', '${place.note}', '${place.time}')`).join(',')}`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }

    static async findAll(scheduleSeedId) {
        const query = `SELECT * FROM ScheduleSeedPlace WHERE scheduleSeedId = ${scheduleSeedId}`;
        console.log(query);
        const result = await pool.query(query);
        return result.recordset;
    }

    static async deleteByScheduleSeedId(scheduleSeedId) {
        const query = `DELETE FROM ScheduleSeedPlace WHERE scheduleSeedId = ${scheduleSeedId}`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }
}