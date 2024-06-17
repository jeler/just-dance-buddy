// Import the 'express' module
import http from 'http';
import express from 'express';
import logging from './config/logging';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { server } from './config/config';
import songsRoutes from './routes/songs';
import tracksRoutes from './routes/tracks';
import connection from './db/database';

// Create an Express application
export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    app.use(loggingHandler);
    app.use(corsHandler);

    logging.log('----------------------------------------');
    logging.log('Define Controller Routing');
    logging.log('----------------------------------------');
    app.get('/main/healthcheck', (req, res, next) => {
        return res.status(200).json({ hello: 'world!' });
    });

    logging.log('----------------------------------------');
    logging.log('Define Songs Controller Routing');
    logging.log('----------------------------------------');
    app.use('/songs', songsRoutes);
    app.use('/tracks', tracksRoutes);

    logging.log('----------------------------------------');
    logging.log('Define Routing Error');
    logging.log('----------------------------------------');
    app.use(routeNotFound);

    // logging.log('----------------------------------------');
    // logging.log('Starting Server');
    // logging.log('----------------------------------------');

    logging.log('----------------------------------------');
    logging.log('Testing Database Connection');
    logging.log('----------------------------------------');
    connection
        .sync()
        .then(() => {
            console.log('Database successfully connected');
        })
        .catch((err) => {
            console.log('Error', err);
        });

    httpServer = http.createServer(app);
    httpServer.listen(server.SERVER_PORT, () => {
        logging.log('----------------------------------------');
        logging.log(`Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`);
        logging.log('----------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
