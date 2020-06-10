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

    findOne(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async createUser (data: CreateUserDto ): Promise<User> {
        const user = new User();
        user.username = data.username;
        user.password = data.password;
        

    }
}
