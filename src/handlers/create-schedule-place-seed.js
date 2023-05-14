const { Request, Response, NextFunction } = require('express');
const ScheduleSeedPlace = require('../models/schedule-seed-place');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.body;
    const places = data.places;
    const scheduleSeedId = data.scheduleSeedId;
    try {
        await ScheduleSeedPlace.insertMany(places.map(place => {
            const scheduleSeedPlace = new ScheduleSeedPlace();
            scheduleSeedPlace.scheduleSeedId = scheduleSeedId;
            scheduleSeedPlace.placeId = place.placeId;
            scheduleSeedPlace.description = place.description;
            scheduleSeedPlace.note = place.note;
            scheduleSeedPlace.time = place.time;
            return scheduleSeedPlace;
        }));
        return res.status(200).send('Create schedule seed successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}