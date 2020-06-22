import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateTodoDto {
    @Field() readonly id?: string;
    @Field() readonly title: string;
    @Field() readonly body: string;
    @Field() readonly dueDate: Date;
    @Field() readonly dateCompleted?: Date;
    @Field() readonly status?: string;
}