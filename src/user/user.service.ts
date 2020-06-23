import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(username: string): Promise<User> {
        return this.userRepository.findOne(username);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async createUser(data: CreateUserDto): Promise<User> {
        const user = new User();
        user.username = data.username;
        user.email = data.email;
        user.password = data.password;
        user.firstName = data.firstName;
        user.lastName = data.lastName;

        await this.userRepository.save(user);

        return user;
    }
}
