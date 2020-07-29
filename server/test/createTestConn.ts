import { createConnection } from 'typeorm';
import { findEnv } from '../find-env';

require('dotenv').config({ path: findEnv() });

export const createTestConn = async() => 
    createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: "todos-example-test",
        synchronize: true,
        dropSchema: true,
        logging: false,
        entities: ["src/**/*.entity.ts"]
    })