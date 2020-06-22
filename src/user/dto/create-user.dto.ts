import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
    @Field() readonly id?: string;
    @Field() readonly username: string;
    @Field() readonly email: string;
    @Field() readonly password: string;
    @Field() readonly firstName: string;
    @Field() readonly lastName: string;
}