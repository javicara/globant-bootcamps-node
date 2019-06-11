/*! Copyright Globant. All rights reserved. */
'use strict';

const config = require('../../core/config');
const users = require('./controllers');
const validations= require('../validations')


module.exports = function initRoutes(app) {
    // Users resource base route
    const basePath = config.basePath + '/users';

    //console.log(basePath);
    app.get(basePath, users.v1.getAll);
    app.get(`${basePath}/:id`,validations.validateUserId,users.v1.getOneByid);
};
