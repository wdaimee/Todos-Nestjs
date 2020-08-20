import { Todo } from '../todos/todo.entity';
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    todos: Todo[];
}
