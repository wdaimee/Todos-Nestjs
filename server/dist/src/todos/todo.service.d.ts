import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { User } from '../user/user.entity';
import { InputTodo } from './input/todo.input';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAllTodos(user: User): Promise<Todo[]>;
    findAllTodosToday(user: User): Promise<Todo[]>;
    allOpenTodos(user: User): Promise<Todo[]>;
    findOneTodo(id: string, userId: string): Promise<Todo>;
    removeTodo(id: string): Promise<Boolean>;
    createTodo(data: InputTodo, user: User): Promise<Todo>;
    changeStatus(id: string): Promise<Todo>;
    updateTodo(id: string, data: InputTodo, userId: string): Promise<Todo>;
}
