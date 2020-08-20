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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let Todo = class Todo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Todo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100, unique: true }),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500 }),
    __metadata("design:type", String)
], Todo.prototype, "body", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Todo.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "dueDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "dateCompleted", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100, nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.todos),
    __metadata("design:type", user_entity_1.User)
], Todo.prototype, "user", void 0);
Todo = __decorate([
    typeorm_1.Entity('todo')
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map