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

    // Find all a list of all users
    @Query(() => [ CreateUserDto ])
    async allUsers() {
        return this.userService.findAll();
    }

    // Find a specific user by username
    @Query(() => CreateUserDto)
    async findByUsername(@Args('username') username: string) {
        return this.userService.findOneByUsername(username);
    }

    // Find a specific user by user id
    @Query(() => CreateUserDto)
    async findUserById(@Args('id') id: string) {
        return this.userService.findOneById(id);
    }

    // Ge the currently Logged In User
    @Query(() => CreateUserDto)
    @UseGuards(JwtAuthGuard)
    async currentLoggedInUser(@CurrentUser() user: User) {
        return this.userService.findLoggedInUser(user.id);
    }

    // Signup or create a user
    @Mutation(() => LoginOutput)
    async createUser(@Args('data') data: InputUser) {
        const newUser = await this.userService.createUser(data);
        return this.authService.login(newUser);
    }
}