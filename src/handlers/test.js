const { Request, Response, NextFunction } = require('express');
const Account = require('../models/account');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const account = await Account.findByEmail('favefrong2003@gmail.com');
    return res.status(200).send(account);
};