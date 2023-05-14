const { Request, Response, NextFunction } = require('express');
const Account = require('../models/account');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.body;
    const account = await Account.findByEmail(data.email);
    if (!account) {
        return res.status(404).send('Account not found!');
    }
    if (account.password != data.password) {
        return res.status(400).send('Wrong password!');
    }
    return res.status(200).send(account);
};