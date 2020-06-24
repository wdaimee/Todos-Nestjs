import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputTodo {
    @Field() readonly title: string;
    @Field() readonly body: string;
    @Field() readonly dueDate: Date;
    @Field() readonly dateCompleted?: Date;
    @Field() readonly status?: string;
}

@InputType()
export class DateCompletedTodo {
    @Field() readonly dateCompleted: Date;
}