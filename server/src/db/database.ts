import { Sequelize } from 'sequelize-typescript';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, TEST_DB_NAME_2 } from '../config/config';
import { Song } from '../models/song';
import { Track } from '../models/track';
import { Person } from '../models/person';
import { PersonTrack } from '../models/person_tracks';

const connection = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    // database: TEST_DB_NAME_2,
    models: [Song, Track, Person, PersonTrack],
    logging: false
});

export default connection;
