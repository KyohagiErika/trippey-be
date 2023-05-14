const { Request, Response, NextFunction } = require('express');
const DemoSchedule = require('../models/demo-schedule');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.params;
    const schedule = await DemoSchedule.findById(data.id);
    schedule.content = JSON.parse(schedule.content);
    if (!schedule) {
        return res.status(404).send('Schedule not found!');
    }
    return res.status(200).send(schedule);
}