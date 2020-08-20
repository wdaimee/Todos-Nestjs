import { Todo } from './todo.entity';
import { User } from '../user/user.entity';
import { TodoService } from './todo.service';
import { InputTodo } from './input/todo.input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    allTodos(user: User): Promise<Todo[]>;
    allTodosToday(user: User): Promise<Todo[]>;
    allOpenTodos(user: User): Promise<Todo[]>;
    todo(id: string, user: User): Promise<Todo>;
    createTodo(data: InputTodo, user: User): Promise<Todo>;
    changeStatus(id: string): Promise<Todo>;
    deleteTodo(id: string): Promise<Boolean>;
    updateTodo(id: string, data: InputTodo, user: User): Promise<Todo>;
}
