import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';

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
        const foundUserEmail = await this.userRepository.findOne({ email: data.email});
        const foundUsername = await this.userRepository.findOne({ username: data.username});

        if (foundUserEmail) throw new Error("Email has already been taken");
        if (foundUsername) throw new Error("This username has already been taken")

        const user = new User();
        user.username = data.username;
        user.email = data.email;
        user.password = await bcrypt.hash(data.password, 10);
        user.firstName = data.firstName;
        user.lastName = data.lastName;

        await this.userRepository.save(user);

        return user;
    }

    async findLoggedInUser(id: string): Promise<User> {
        const currentLoggedInUser = await this.userRepository.findOne({ id });
        return currentLoggedInUser;
    }
}
