const {teamListHandler, teamDetailsHandler, playerDetailsHandler} = require('./routeHandlers');

module.exports = router;

function router(app) {
    app.get('/teams', teamListHandler);
    app.get('/teams/:id/roster', teamDetailsHandler);
    app.get('/players/:id/', playerDetailsHandler);
}