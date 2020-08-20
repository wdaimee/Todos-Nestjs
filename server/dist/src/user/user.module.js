"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const user_resolver_1 = require("./user.resolver");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
const auth_module_1 = require("../auth/auth.module");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [common_1.forwardRef(() => auth_module_1.AuthModule), typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService],
        exports: [user_service_1.UserService],
        controllers: [],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map