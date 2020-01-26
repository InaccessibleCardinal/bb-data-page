import {Application} from 'express';
import {teamListHandler, teamDetailsHandler, playerDetailsHandler} from './routeHandlers';

export function router(app: Application): void {
    app.get('/teams', teamListHandler);
    app.get('/teams/:id/roster', teamDetailsHandler);
    app.get('/players/:id/', playerDetailsHandler);
}