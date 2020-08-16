export type User = {
    id?: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

export type Todo = {
    id: string;
    title: string;
    body?: string;
    dateCreated: Date;
    dueDate: string;
    dateCompleted: string | null;
    status: string;
}