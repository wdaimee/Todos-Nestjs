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
exports.AddDateCompletedTodo = exports.CreateTodoDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateTodoDto = class CreateTodoDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "body", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], CreateTodoDto.prototype, "dateCreated", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "dueDate", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "dateCompleted", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "status", void 0);
CreateTodoDto = __decorate([
    graphql_1.ObjectType()
], CreateTodoDto);
exports.CreateTodoDto = CreateTodoDto;
let AddDateCompletedTodo = class AddDateCompletedTodo {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], AddDateCompletedTodo.prototype, "dateCompleted", void 0);
AddDateCompletedTodo = __decorate([
    graphql_1.ObjectType()
], AddDateCompletedTodo);
exports.AddDateCompletedTodo = AddDateCompletedTodo;
//# sourceMappingURL=create-todo.dto.js.map