const { Request, Response, NextFunction } = require('express');
const Account = require('../models/account');

/**

 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next 
 */
module.exports = async (req, res, next) => {
    const data = req.body;
    if (await Account.findByEmail(data.email)) {
        return res.status(400).send('Email already exists!');
    }
    const account = new Account();
    account.email = data.email;
    account.password = data.password;
    account.fname = data.fname;
    account.lname = data.lname;
    account.address = data.address;
    try {
        await account.save();
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
    return res.status(200).send('Create account successfully!');
};