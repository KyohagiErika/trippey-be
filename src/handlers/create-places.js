const { Request, Response, NextFunction } = require('express');
const Place = require('../models/place');
const Location = require('../models/location');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const imgs = req.files;
    const data = req.body;
    const places = JSON.parse(data.places);
    if (!(await Location.findById(data.locationId))) {
        return res.status(400).send('Location not found!');
    }
    try {
        await Place.insertMany(places.map((placeDto, index) => {
            const place = new Place();
            place.locationId = data.locationId;
            place.name = placeDto.name;
            place.note = placeDto.note;
            place.content = placeDto.content;
            place.img = imgs[index]?.filename;
            return place;
        }));
        return res.status(200).send('Create places successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}