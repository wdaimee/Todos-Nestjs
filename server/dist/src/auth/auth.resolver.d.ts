import { InputLogin } from '../user/input/login.input';
import { AuthService } from './auth.service';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: InputLogin): Promise<{
        accessToken: string;
    }>;
    verifyToken(token: string): Promise<boolean>;
}
