import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { InputUser } from './input/user.input';
export declare class UserResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    allUsers(): Promise<User[]>;
    findByUsername(username: string): Promise<User>;
    findUserById(id: string): Promise<User>;
    currentLoggedInUser(user: User): Promise<User>;
    createUser(data: InputUser): Promise<{
        accessToken: string;
    }>;
}
