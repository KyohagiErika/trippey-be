const { Request, Response, NextFunction } = require('express');
const DemoSchedule = require('../models/demo-schedule');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const params = req.params;
    const data = req.body;
    const schedule = await DemoSchedule.findById(params.id);
    if (!schedule) {
        return res.status(404).send('Schedule not found!');
    }
    schedule.note = data.note;
    schedule.content = data.content;
    await schedule.save();
    return res.status(200).send(schedule);
}