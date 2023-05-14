const { Request, Response, NextFunction } = require('express');
const ScheduleSeed = require('../models/schedule-seed');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.body;
    const scheduleSeed = new ScheduleSeed();
    scheduleSeed.locationId = data.locationId;
    scheduleSeed.description = data.description;
    scheduleSeed.note = data.note;
    scheduleSeed.noDays = data.noDays;
    scheduleSeed.totalPrice = data.totalPrice;
    try {
        await scheduleSeed.save();
        return res.status(200).send('Create schedule seed successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}