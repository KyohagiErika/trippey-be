const { Request, Response, NextFunction } = require('express');
const ScheduleSeedPlace = require('../models/schedule-seed-place');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    try {
        const data = req.query;
        const schedulePlaces = await ScheduleSeedPlace.findAll(data.scheduleSeedId);
        return res.status(200).send(schedulePlaces);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}