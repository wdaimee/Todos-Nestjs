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
exports.TodoResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const todo_entity_1 = require("./todo.entity");
const user_entity_1 = require("../user/user.entity");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const todo_service_1 = require("./todo.service");
const todo_input_1 = require("./input/todo.input");
const local_auth_guard_1 = require("../auth/local-auth-guard");
const CurrentUser_decorator_1 = require("../user/CurrentUser.decorator");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async allTodos(user) {
        return this.todoService.findAllTodos(user);
    }
    async allTodosToday(user) {
        return this.todoService.findAllTodosToday(user);
    }
    async allOpenTodos(user) {
        return this.todoService.allOpenTodos(user);
    }
    async todo(id, user) {
        return this.todoService.findOneTodo(id, user.id);
    }
    async createTodo(data, user) {
        return this.todoService.createTodo(data, user);
    }
    async changeStatus(id) {
        return this.todoService.changeStatus(id);
    }
    async deleteTodo(id) {
        return this.todoService.removeTodo(id);
    }
    async updateTodo(id, data, user) {
        return this.todoService.updateTodo(id, data, user.id);
    }
};
__decorate([
    graphql_1.Query(() => [create_todo_dto_1.CreateTodoDto]),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "allTodos", null);
__decorate([
    graphql_1.Query(() => [create_todo_dto_1.CreateTodoDto]),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "allTodosToday", null);
__decorate([
    graphql_1.Query(() => [create_todo_dto_1.CreateTodoDto]),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "allOpenTodos", null);
__decorate([
    graphql_1.Query(() => create_todo_dto_1.CreateTodoDto),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __param(1, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todo", null);
__decorate([
    graphql_1.Mutation(() => create_todo_dto_1.CreateTodoDto),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('data')),
    __param(1, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_input_1.InputTodo,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    graphql_1.Mutation(() => create_todo_dto_1.CreateTodoDto),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "changeStatus", null);
__decorate([
    graphql_1.Mutation(returns => Boolean),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deleteTodo", null);
__decorate([
    graphql_1.Mutation(() => create_todo_dto_1.CreateTodoDto),
    common_1.UseGuards(local_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('data')),
    __param(2, CurrentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, todo_input_1.InputTodo,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updateTodo", null);
TodoResolver = __decorate([
    graphql_1.Resolver(() => todo_entity_1.Todo),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map