import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { InputUser } from './input/user.input';
import { CurrentUser } from './CurrentUser.decorator';
import { GqlAuthGuard } from '../auth/local-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
    constructor (private readonly userService: UserService) {}

    @Query(() => [ CreateUserDto ])
    async allUsers() {
        return this.userService.findAll();
    }

    @Query(() => CreateUserDto)
    async user(@Args('username') username: string) {
        return this.userService.findOne(username);
    }

    @Query(() => CreateUserDto)
    @UseGuards(GqlAuthGuard)
    me(@CurrentUser() user: User) {
        return user;
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('data') data: InputUser) {
        return this.userService.createUser(data);
    }
}