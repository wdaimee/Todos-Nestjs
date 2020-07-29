import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { UserService } from '../user/user.service';
import { InputTodo, DateCompletedTodo } from './input/todo.input';


// TODO User Authentication and use logged in user to find all the services bellow
@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) 
    private todoRepository: Repository<Todo>, 
    private readonly userService: UserService
    ) {}

    // Find all Todos that belong to a user
    findAll(userId: string): Promise<Todo[]> {
        return this.todoRepository.find({ where: { user: userId } });
    }

    // Get all Todos for a user that are currently open
    allOpen(userId: string): Promise<Todo[]> {
        return this.todoRepository.find({ where: { user: userId, status: 'open' } });
    }

    // Get a specific user for a todo
    async findOne(id: string, userId: string): Promise<Todo> {
        const user = await this.userService.find({ where: })
        return this.todoRepository.findOne({ where: { id, user: userId }});
    } 

    // Delete a specific Todo
    async remove(id: string): Promise<void> {
        await this.todoRepository.delete(id);
    }

    // Need to make sure FK to logged in user is added in
    async createTodo(data: InputTodo): Promise<Todo> {
        const foundTodo = await this.todoRepository.findOne({ title: data.title })
        if (foundTodo) throw new Error("This title already exists, a unique title is required")

        const todo = new Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = new Date(data.dueDate).toISOString();
        todo.status = 'open';

        await this.todoRepository.save(todo);

        return todo;
    }

    // Add completed date to Todo
    async addDateCompleted(id: string, data: DateCompletedTodo): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        todo.dateCompleted = new Date(data.dateCompleted).toISOString();
        todo.status = 'complete';

        await this.todoRepository.save(todo);

        return todo;
    }

    // Update Todo
    async update(id: string, data: InputTodo): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        return this.todoRepository.save({
            ...todo,
            ...data
        });
    }
}