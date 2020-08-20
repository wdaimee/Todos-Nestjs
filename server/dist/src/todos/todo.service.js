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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("./todo.entity");
const typeorm_3 = require("typeorm");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    findAllTodos(user) {
        return this.todoRepository.find({ where: { user }, order: { dueDate: "ASC", status: "DESC" } });
    }
    findAllTodosToday(user) {
        let today = new Date().setHours(0, 0, 0, 0);
        return this.todoRepository.find({ where: { user, dueDate: typeorm_3.MoreThanOrEqual(new Date(today)) }, order: { dueDate: "ASC", status: "DESC" } });
    }
    allOpenTodos(user) {
        return this.todoRepository.find({ where: { user, status: 'open' }, order: { dueDate: "DESC" } });
    }
    async findOneTodo(id, userId) {
        const todo = await this.todoRepository.findOne({ where: { id, user: userId }, order: { dueDate: "DESC" } });
        if (userId !== todo.user.id) {
            throw new Error("You don't have access to this Todo");
        }
        return todo;
    }
    async removeTodo(id) {
        const { affected } = await this.todoRepository.delete(id);
        if (affected && affected > 0)
            return true;
        return false;
    }
    async createTodo(data, user) {
        const foundTodo = await this.todoRepository.findOne({ where: { user, title: data.title } });
        if (foundTodo)
            throw new Error("This title already exists");
        if (!data.title && !data.dueDate)
            throw new Error("Title and due date are required");
        if (!data.title)
            throw new Error("A title is required");
        if (!data.dueDate)
            throw new Error("A due date is required");
        const todo = new todo_entity_1.Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = new Date(data.dueDate).toISOString();
        todo.status = 'open';
        todo.user = user;
        await this.todoRepository.save(todo);
        return todo;
    }
    async changeStatus(id) {
        const todo = await this.todoRepository.findOne(id);
        if (todo.status === 'open') {
            todo.dateCompleted = new Date().toISOString();
            todo.status = 'complete';
        }
        else if (todo.status === 'complete') {
            todo.dateCompleted = null;
            todo.status = 'open';
        }
        await this.todoRepository.save(todo);
        return todo;
    }
    async updateTodo(id, data, userId) {
        const todo = await this.todoRepository.findOne(id);
        if (userId !== todo.user.id) {
            throw new Error("You do not have access to this Todo");
        }
        return this.todoRepository.save(Object.assign(Object.assign({}, todo), data));
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map