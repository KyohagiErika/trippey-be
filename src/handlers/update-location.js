const { Request, Response, NextFunction } = require('express');
const Location = require('../models/location');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const img = req.file;
    const data = req.body;
    const { id } = req.params;
    const location = await Location.findById(id);
    if (!location) {
        return res.status(404).send('Location not found!');
    }
    if (!data.name) {
        return res.status(400).send('Missing name!');
    }
    location.name = data.name;
    location.img = img.filename;
    try {
        await location.save();
        return res.status(200).send('Update location successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};