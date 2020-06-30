import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { InputTodo, DateCompletedTodo } from './input/todo.input';


// TODO User Authentication and use logged in user to find all the services bellow
@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) 
    private todoRepository: Repository<Todo>, 
    ) {}

    // Find all Todos that belong to a user
    findAll(): Promise<Todo[]> {
        return this.todoRepository.find({})
    }

    // Get all Todos for a user that are currently open
    allOpen(): Promise<Todo[]> {
        return this.todoRepository.find({status: 'open'})
    }

    // Get a specific user for a todo
    findOne(id: string): Promise<Todo> {
        return this.todoRepository.findOne(id)
    } 

    // Delete a specific Todo
    async remove(id: string): Promise<void> {
        await this.todoRepository.delete(id)
    }

    // Need to make sure FK to logged in user is added in
    async createTodo(data: InputTodo): Promise<Todo> {
        const todo = new Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = data.dueDate;
        todo.dateCompleted = data.dateCompleted;
        todo.status = 'open';

        await this.todoRepository.save(todo);

        return todo;
    }

    // Add completed date to Todo
    async addDateCompleted(id: string, data: DateCompletedTodo): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        todo.dateCompleted = data.dateCompleted;
        todo.status = 'complete';

        await this.todoRepository.save(todo);

        return todo;
    }
}