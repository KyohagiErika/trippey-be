const pool = require('../main').pool;

module.exports = class Place {
    id;
    name;
    note;
    locationId;
    img;
    content;

    async save() {
        if (this.id) {
            // Update query here
            const query = `UPDATE Place SET name = N'${this.name}, note = N'${this.note}', locationId = '${this.locationId}', img = N'${this.img}', content = N'${this.content}' WHERE id = '${this.id}'`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        } else {
            const query = `INSERT INTO Place (name, note, locationId, img, content) VALUES (N'${this.name}', N'${this.note}', '${this.locationId}', N'${this.img}', N'${this.content}')`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        }
    }

    static async insertMany(places) {
        const query = `INSERT INTO Place (name, note, locationId, img, content) VALUES ${places.map(place => `(N'${place.name}', N'${place.note}', ${place.locationId}, N'${place.img}', N'${place.content}')`).join(',')}`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }

    static async findAll(locationId) {
        const query = `SELECT * FROM Place WHERE locationId = '${locationId}'`;
        console.log(query);
        const result = await pool.query(query);
        return result.recordset;
    }

    static async findById(id) {
        const query = `SELECT * FROM Place WHERE id = '${id}'`;
        console.log(query);
        const result = await pool.query(query);
        if (!result.recordset[0]) return null;
        const place = new Place();
        place.id = result.recordset[0].id;
        place.name = result.recordset[0].name;
        place.note = result.recordset[0].note;
        place.locationId = result.recordset[0].locationId;
        place.img = result.recordset[0].img;
        place.content = result.recordset[0].content;
        return place;
    }

    static async deleteById(id) {
        const query = `DELETE FROM Place WHERE id = '${id}'`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }

    static async deleteByLocationId(locationId) {
        const query = `DELETE FROM Place WHERE locationId = '${locationId}'`;
        console.log(query);
        const result = await pool.query(query);
        console.log(result);
    }
}