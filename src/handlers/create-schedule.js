const { Request, Response, NextFunction } = require('express');
const DemoScheduleSeed = require('../seeds/demo-schedule.seed');
const DemoSchedule = require('../models/demo-schedule');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.body;
    // calc noDays from dateStart and dateEnd
    const noDays = Math.floor((new Date(data.dateEnd) - new Date(data.dateStart)) / (1000 * 60 * 60 * 24))+1;
    console.log(noDays)
    // get all schedules of locationId
    const schedules = DemoScheduleSeed.filter(item => item.locationId == data.locationId && item.price >= data.startPrice && item.price <= data.endPrice && item.noDays == noDays);
    if (schedules.length === 0) {
        return res.status(404).send('Schedule not found!');
    }
    // random schedule
    const randomIndex = Math.floor(Math.random() * schedules.length);
    let schedule = new DemoSchedule();
    schedule.price = schedules[randomIndex].price;
    schedule.description = schedules[randomIndex].description;
    schedule.note = schedules[randomIndex].note;
    schedule.locationId = schedules[randomIndex].locationId;
    schedule.accountId = data.accountId;
    schedule.dateStart = data.dateStart;
    schedule.dateEnd = data.dateEnd;
    schedule.content = JSON.stringify(schedules[randomIndex].schedule);
    await schedule.save();
    schedule = await DemoSchedule.findByAccountIdAndIndex(data.accountId, 0);
    schedule.content = JSON.parse(schedule.content);
    return res.status(200).send(schedule);
}