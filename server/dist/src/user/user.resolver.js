"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./user.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_service_1 = require("./user.service");
const auth_service_1 = require("../auth/auth.service");
const user_input_1 = require("./input/user.input");
const login_output_1 = require("./output/login.output");
const CurrentUser_decorator_1 = require("./CurrentUser.decorator");
const local_auth_guard_1 = require("../auth/local-auth-guard");
const common_1 = require("@nestjs/common");
let UserResolver = class UserResolver {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async allUsers() {
        return this.userService.findAll();
    }
    async findByUsername(username) {
        return this.userService.findOneByUsername(username);
    }
    async findUserById(id) {
        return this.userService.findOneById(id);
    }
    async currentLoggedInUser(user) {
        return this.userService.findLoggedInUser(user.username);
    }
    async createUser(data) {
        const newUser = await this.userService.createUser(data);
        return this.authService.login(newUser);
    }
};
__decorate([
    graphql_1.Query(() => [create_user_dto_1.CreateUserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUsers", null);
__decorate([
    graphql_1.Query(() => create_user_dto_1.CreateUserDto),
    __param(0, graphql_1.Args('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findByUsername", null);
__decorate([
    graphql_1.Query(() => create_user_dto_1.CreateUserDto),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findUserById", null);
__decorate([
    graphql_1.Query(() => create_user_dto_1.CreateUserDto),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "currentLoggedInUser", null);
__decorate([
    graphql_1.Mutation(() => login_output_1.LoginOutput),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.InputUser]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map