const pool = require('../main').pool;

module.exports = class DemoSchedule {
    id;
    price;
    description;
    note;
    locationId;
    accountId;
    dateStart;
    dateEnd;
    content;

    async save() {
        if (this.id) {
            const query = `UPDATE DemoSchedule SET price = '${this.price}', description = N'${this.description}', note = N'${this.note}', locationId = '${this.locationId}', content = N'${this.content}' WHERE id = '${this.id}'`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        } else {
            const query = `INSERT INTO DemoSchedule (price, description, note, locationId, accountId, dateStart, dateEnd, content) VALUES ('${this.price}', N'${this.description}', N'${this.note}', '${this.locationId}', '${this.accountId}', '${this.dateStart}', '${this.dateEnd}', N'${this.content}')`;
            console.log(query);
            const result = await pool.query(query);
            console.log(result);
        }
    }

    static async findByAccountIdAndIndex(accountId, index) {
        const query = `SELECT * FROM DemoSchedule WHERE accountId = '${accountId}' ORDER BY id DESC OFFSET ${index} ROWS FETCH NEXT 1 ROWS ONLY`;
        console.log(query);
        const result = await pool.query(query);
        if (!result.recordset[0]) return null;
        const demoSchedule = new DemoSchedule();
        demoSchedule.id = result.recordset[0].id;
        demoSchedule.price = result.recordset[0].price;
        demoSchedule.description = result.recordset[0].description;
        demoSchedule.note = result.recordset[0].note;
        demoSchedule.locationId = result.recordset[0].locationId;
        demoSchedule.accountId = result.recordset[0].accountId;
        demoSchedule.dateStart = result.recordset[0].dateStart;
        demoSchedule.dateEnd = result.recordset[0].dateEnd;
        demoSchedule.content = result.recordset[0].content;
        return demoSchedule;
    }

    static async findById(id) {
        const query = `SELECT * FROM DemoSchedule WHERE id = '${id}'`;
        console.log(query);
        const result = await pool.query(query);
        if (!result.recordset[0]) return null;
        const demoSchedule = new DemoSchedule();
        demoSchedule.id = result.recordset[0].id;
        demoSchedule.price = result.recordset[0].price;
        demoSchedule.description = result.recordset[0].description;
        demoSchedule.note = result.recordset[0].note;
        demoSchedule.locationId = result.recordset[0].locationId;
        demoSchedule.accountId = result.recordset[0].accountId;
        demoSchedule.dateStart = result.recordset[0].dateStart;
        demoSchedule.dateEnd = result.recordset[0].dateEnd;
        demoSchedule.content = result.recordset[0].content;
        return demoSchedule;
    }
}