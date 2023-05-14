const { Request, Response, NextFunction } = require('express');
const Place = require('../models/place');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const img = req.file;
    const data = req.body;
    const { id } = req.params;
    const place = await Place.findById(id);
    if (!place) {
        return res.status(404).send('Place not found!');
    }
    place.name = data.name;
    place.experienceTimeEnd = data.experienceTimeEnd;
    place.experienceTimeStart = data.experienceTimeStart;
    place.locationId = data.locationId;
    place.note = data.note;
    place.priceEnd = data.priceEnd;
    place.priceStart = data.priceStart;
    place.timeEnd = data.timeEnd;
    place.timeStart = data.timeStart;
    place.unit = data.unit;
    place.img = img.filename;
    try {
        await place.save();
        return res.status(200).send('Update place successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};