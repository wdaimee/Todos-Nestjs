import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service'
import { InputUser } from './input/user.input';
import { InputLogin } from './input/login.input';
import { LoginOutput } from './output/login.output';
import { CurrentUser } from './CurrentUser.decorator';
import { GqlAuthGuard } from '../auth/local-auth-guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards, Request } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
    constructor (private readonly userService: UserService,
                 private readonly authService: AuthService) {}

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

    @Mutation(() => LoginOutput)
    async createUser(@Args('data') data: InputUser) {
        const newUser = await this.userService.createUser(data);
        return this.authService.login(newUser);
    }
}