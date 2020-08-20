"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const find_env_1 = require("../../find-env");
require('dotenv').config({ path: find_env_1.findEnv() });
exports.jwtConstants = {
    secret: process.env.SECRET_KEY
};
//# sourceMappingURL=constants.js.map