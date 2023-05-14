const { Request, Response, NextFunction } = require('express');
const Location = require('../models/location');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    try {
        const locations = await Location.findAll();
        return res.status(200).send(locations);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};