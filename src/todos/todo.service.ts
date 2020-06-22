import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';


//TODO User Authentication and use logged in user to find all the services bellow
@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) 
    private todoRepository: Repository<Todo>, 
    ) {}

    //Find all Todos that belong to a user
    findAll(): Promise<Todo[]> {
        return this.todoRepository.find({})
    }

    findOne(id: string): Promise<Todo> {
        return this.todoRepository.findOne(id)
    } 

    async remove(id: string): Promise<void> {
        await this.todoRepository.delete(id)
    }

    // Need to make sure FK to logged in user is added in
    async createTodo(data: CreateTodoDto): Promise<Todo> {
        const todo = new Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = data.dueDate;
        todo.dateCompleted = data.dateCompleted;
        todo.status = 'open';

        await this.todoRepository.save(todo);

        return todo;
    }
}