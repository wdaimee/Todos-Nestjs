import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputTodo {
    @Field({ nullable: true}) readonly title?: string;
    @Field({ nullable: true }) readonly body?: string;
    @Field({ nullable: true }) dueDate?: string;
    @Field({ nullable: true }) readonly dateCompleted?: string;
    @Field({ nullable: true }) readonly status?: string;
    @Field({ nullable: true }) readonly dateCreated?: Date;
}
