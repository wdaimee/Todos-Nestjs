import { Field, InputType } from'@nestjs/graphql';

@InputType()
export class InputLogin {
    @Field() readonly username: string;
    @Field() readonly password: string;
}