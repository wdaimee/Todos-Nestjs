import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { MoreThanOrEqual } from 'typeorm';
import { User } from '../user/user.entity';
import { InputTodo } from './input/todo.input';


// TODO User Authentication and use logged in user to find all the services bellow
@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) 
    private todoRepository: Repository<Todo>
    ) {}

    // Find all Todos that belong to a user
    findAllTodos(user: User): Promise<Todo[]> {
        return this.todoRepository.find({ where: { user }, order: { dueDate: "ASC", status: "DESC" } });
    }

    // Find all Todos for today and future
    findAllTodosToday(user: User): Promise<Todo[]> {
        let today = new Date().setHours(0,0,0,0)
        return this.todoRepository.find({ where: { user, dueDate: MoreThanOrEqual(new Date(today)) }, order: { dueDate: "ASC", status: "DESC" } });
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
    async removeTodo(id: string, userId: string): Promise<Boolean> {
        const todo = await this.todoRepository.findOne({ where: { id }});
        if (userId !== todo.userId) throw new Error("You are not authorized to perform this task");
        const { affected } = await this.todoRepository.delete(id);
        if (affected && affected > 0) return true;
        return false;
    }

    // Need to make sure FK to logged in user is added in
    async createTodo(data: InputTodo, user: User): Promise<Todo> {
        const foundTodo = await this.todoRepository.findOne({ where: { user, title: data.title } });
        // Throw an error if a title is being reused
        if (foundTodo) throw new Error("This title already exists");
        // If a title and due date are not provided, throw an error
        if (!data.title && !data.dueDate) throw new Error("Title and due date are required");
        // Throw an error if no title submitted
        if (!data.title) throw new Error("A title is required");
        // Throw an error if no date provided
        if (!data.dueDate) throw new Error("A due date is required");

        const todo = new Todo();
        todo.title = data.title;
        todo.body = data.body;
        todo.dueDate = new Date(data.dueDate).toISOString();
        todo.status = 'open';
        todo.user = user;

        await this.todoRepository.save(todo);

        return todo;
    }

    // Function to change status of Todo
    async changeStatus(id: string, userId: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        // If logged in user id does not match todo user id, prevent user from changing status
        if (userId !== todo.userId) throw new Error("You are not authorized to perform this task");
        if (todo.status === 'open') {
            todo.dateCompleted = new Date().toISOString();
            todo.status = 'complete';
        } else if (todo.status === 'complete') {
            todo.dateCompleted = null;
            todo.status = 'open';
        }
    
        await this.todoRepository.save(todo);

        return todo;
    }

    // Update Todo
    async updateTodo(id: string, data: InputTodo, userId: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne(id);
        // If logged in user id does not equal todo user id, prevent update of todo
        if(userId !== todo.userId) throw new Error("You are not authorized to perform this task");
        // update the dueDate of the todo to an ISOString and save it
        todo.dueDate = new Date(data.dueDate).toISOString();
        // remove the dueDate from the data object and save the todo in database
        // with other data that might be changed
        delete data.dueDate;
        return this.todoRepository.save({
            ...todo,
            ...data
        });
    }
}