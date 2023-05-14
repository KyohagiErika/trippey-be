const { Request, Response, NextFunction } = require('express');
const Location = require('../models/location');
const Place = require('../models/place');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Place.deleteByLocationId(id);
        await Location.deleteById(id);
        return res.status(200).send('Delete location successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};