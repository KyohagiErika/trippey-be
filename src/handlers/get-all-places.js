const { Request, Response, NextFunction } = require('express');
const Place = require('../models/place');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    try {
        const data = req.query;
        const places = await Place.findAll(data.locationId);
        return res.status(200).send(places);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
}