import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputTodo {
    @Field() readonly title: string;
    @Field() readonly body: string;
    @Field() readonly dueDate: string;
    @Field({ nullable: true }) readonly dateCompleted?: string;
    @Field({ nullable: true }) readonly status?: string;
    @Field({ nullable: true }) readonly dateCreated?: Date;
}

@InputType()
export class DateCompletedTodo {
    @Field() readonly dateCompleted: string;
}