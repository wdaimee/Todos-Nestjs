import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateTodoDto {
    @Field() readonly id?: string;
    @Field() readonly title?: string;
    @Field() readonly body?: string;
    @Field() readonly dateCreated?: Date;
    @Field() readonly dueDate: string;
    @Field({ nullable: true }) readonly dateCompleted?: string;
    @Field() readonly status?: string;
}

@ObjectType()
export class AddDateCompletedTodo {
    @Field() readonly dateCompleted: Date;
}