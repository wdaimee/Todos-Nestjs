import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOneByUsername(username: string): Promise<User>;
    findOneById(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    createUser(data: CreateUserDto): Promise<User>;
    findLoggedInUser(username: string): Promise<User>;
}
