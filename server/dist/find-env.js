"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEnv = void 0;
const find_up_1 = __importDefault(require("find-up"));
exports.findEnv = () => find_up_1.default.sync(process.env.ENV_FILE || '.env');
//# sourceMappingURL=find-env.js.map