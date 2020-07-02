import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { InputUser } from './input/user.input';
import { InputLogin } from './input/login.input';
import { LoginOutput } from './output/login.output';
import { CurrentUser } from './CurrentUser.decorator';
import { GqlAuthGuard } from '../auth/local-auth-guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards, Request } from '@nestjs/common';

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
    @UseGuards(JwtAuthGuard)
    async currentLoggedInUser(@CurrentUser() user: User) {
        return this.userService.findLoggedInUser(user.id);
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('data') data: InputUser) {
        return this.userService.createUser(data);
    }
}