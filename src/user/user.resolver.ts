import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { InputUser } from './input/user.input';

@Resolver(() => User)
export class UserResolver {
    constructor (private readonly userService: UserService) {}

    @Query(() => [ CreateUserDto ])
    async allUsers() {
        return this.userService.findAll();
    }

    @Query(() => CreateUserDto)
    async user(@Args('id') id: string) {
        return this.userService.findOne(id);
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('data') data: InputUser) {
        return this.userService.createUser(data);
    }
}