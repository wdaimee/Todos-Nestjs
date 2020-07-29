import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { InputTodo, DateCompletedTodo } from './input/todo.input';


// TODO User Authentication and use logged in user to find all the services bellow
@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) 
    private todoRepository: Repository<Todo>, 
    private readonly userService: UserService
    ) {}

    // Find all Todos that belong to a user
    findAllTodos(user: User): Promise<Todo[]> {
        return this.todoRepository.find({ where: { user } });
    }

    // Get all Todos for a user that are currently open
    allOpenTodos(user: User): Promise<Todo[]> {
        return this.todoRepository.find({ where: { user, status: 'open' }, order: { dueDate: "DESC" } });
    }

    // Get a specific user for a todo
    async findOneTodo(id: string, userId: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne({ where: { id, user: userId }, order: { dueDate: "DESC" }} );
        if (userId !== todo.user.id) {
            throw new Error("You don't have access to this Todo");
        }
        return todo;
    } 

    // Delete a specific Todo
    async removeTodo(id: string, userId: string): Promise<void> {
        const todo = await this.todoRepository.findOne({ where: { id } });
        if (userId !== todo.user.id) {
            throw new Error("You don't have access to this Todo");
        }
        await this.todoRepository.delete(id);
    }

    // Need to make sure FK to logged in user is added in
    async createTodo(data: InputTodo, user: User): Promise<Todo> {
        const foundTodo = await this.todoRepository.findOne({ where: { user, title: data.title } });
        if (foundTodo) throw new Error("This title already exists, a unique title is required");

        const todo = new Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = new Date(data.dueDate).toISOString();
        todo.status = 'open';
        todo.user = user;

        await this.todoRepository.save(todo);

        return todo;
    }

    // Add completed date to Todo
    async addDateCompleted(id: string, data: DateCompletedTodo, userId: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        if(userId !== todo.user.id) {
            throw new Error("You do not have access to this Todo");
        }
        todo.dateCompleted = new Date(data.dateCompleted).toISOString();
        todo.status = 'complete';

        await this.todoRepository.save(todo);

        return todo;
    }

    // Update Todo
    async updateTodo(id: string, data: InputTodo, userId: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        if (userId !== todo.user.id) {
            throw new Error("You do not have access to this Todo");
        }
        return this.todoRepository.save({
            ...todo,
            ...data
        });
    }
}