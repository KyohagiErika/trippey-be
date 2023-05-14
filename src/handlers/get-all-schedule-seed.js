const { Request, Response, NextFunction } = require('express');
const ScheduleSeed = require('../models/schedule-seed');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    try {
        const schedules = await ScheduleSeed.findAll();
        return res.status(200).send(schedules);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}