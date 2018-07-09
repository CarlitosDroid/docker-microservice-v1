'use strict'

const dbConnection = require('../db')

const UserService = {
    getRegister() {
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT firstName FROM USER', (err, results) => {
                if (err) {
                    console.log(`veamos ${err}`)
                    return reject(new Error('An error occured getting the users: ' + err));
                }

                resolve((results || []).map((user) => {
                    return {
                        name: user.firstName
                    };
                }));
            });
        });
    }
}

module.exports = UserService