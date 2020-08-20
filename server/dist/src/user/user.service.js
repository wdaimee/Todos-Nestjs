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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return this.userRepository.find();
    }
    findOneByUsername(username) {
        return this.userRepository.findOne({ where: { username: username } });
    }
    findOneById(id) {
        return this.userRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
    async createUser(data) {
        const foundUserEmail = await this.userRepository.findOne({ email: data.email });
        const foundUsername = await this.userRepository.findOne({ username: data.username });
        if (foundUserEmail)
            throw new Error("Email has already been taken");
        if (foundUsername)
            throw new Error("This username has already been taken");
        const user = new user_entity_1.User();
        user.username = data.username;
        user.email = data.email;
        user.password = await bcrypt_1.default.hash(data.password, 10);
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        await this.userRepository.save(user);
        return user;
    }
    async findLoggedInUser(username) {
        console.log(username);
        const currentLoggedInUser = await this.userRepository.findOne({ where: { username } });
        return currentLoggedInUser;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map