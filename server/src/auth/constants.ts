import { findEnv } from '../../find-env';

require('dotenv').config({ path: findEnv() })

export const jwtConstants = {
    secret: process.env.SECRET_KEY
};