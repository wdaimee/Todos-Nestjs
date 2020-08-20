import { User } from '../user/user.entity';
export declare class Todo {
    id: string;
    title: string;
    body: string;
    dateCreated: Date;
    dueDate: string;
    dateCompleted: string;
    status: string;
    user: User;
}
