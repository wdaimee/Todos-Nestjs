import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginOutput } from '../user/output/login.output';
import { InputLogin } from '../user/input/login.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => LoginOutput)
    async login(@Args('data') data: InputLogin) {
        const user = await this.authService.validateUser(data.username, data.password);
        if (!user) throw new Error('Invalid Login Credentials');
        return this.authService.login(user);
    }

    @Query(() => Boolean)
    async verifyToken(@Args('accessToken') token: string) {
        try {
            this.authService.verify(token);
            return true;
        } catch (e) {
            return false
        }
    }
}