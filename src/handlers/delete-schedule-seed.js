const { Request, Response, NextFunction } = require('express');
const ScheduleSeed = require('../models/schedule-seed');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        await ScheduleSeed.deleteById(id);
        return res.status(200).send('Delete schedule successfully!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};