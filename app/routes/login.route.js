
'use strict';

function route_login (config) {
  return function (req, res, next) {
    var createHash = require('sha.js');
    var sha256 = createHash('sha256');

    var username = req.param('username');
    var password = sha256.update(req.param('password'), 'utf8').digest('hex');

    for (var i = 0; i < config.credentials.length; i++) {
      if (
        username === config.credentials[i].username &&
        password === config.credentials[i].password
      ) {
        req.session.loggedIn = true;
        req.session.username = config.credentials[i].username;
        res.json({
          status  : 1,
          message : config.lang.api.loginSuccessful
        });
        return;
      }
    }

    res.json({
      status  : 0,
      message : config.lang.api.invalidCredentials
    });
  };
}

// Exports
module.exports = route_login;
