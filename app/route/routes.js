const controller = require('../controller/controller.js');

module.exports = function(app){
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get("/api/auth/getUserBasedOnEmail", controller.getUserBasedOnEmail);

    app.get('/api/db/getUserInfo', controller.getUserInfo);

    app.get('/api/db/getTodaysTask', controller.getTodaysTask);

    app.get('/api/:id', controller.testApi);
}