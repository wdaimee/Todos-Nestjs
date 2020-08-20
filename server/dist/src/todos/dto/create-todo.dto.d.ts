export declare class CreateTodoDto {
    readonly id?: string;
    readonly title?: string;
    readonly body?: string;
    readonly dateCreated?: Date;
    readonly dueDate: string;
    readonly dateCompleted?: string;
    readonly status?: string;
}
export declare class AddDateCompletedTodo {
    readonly dateCompleted: Date;
}
