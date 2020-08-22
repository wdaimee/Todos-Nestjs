import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOneByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({ where: { username: username }});
    }

    findOneById(id: string): Promise<User> {
        return this.userRepository.findOne({ where: { id: id }})
    }

    // Should only be useable by an admin TODO: Create and Admin Guard
    // Delete a specific user
    async removeUser(id: string): Promise<Boolean> {
        const { affected } = await this.userRepository.delete(id);
        if (affected && affected > 0) return true;
        return false;
    }

    async createUser(data: CreateUserDto): Promise<User> {
        const foundUserEmail = await this.userRepository.findOne({ email: data.email});
        const foundUsername = await this.userRepository.findOne({ username: data.username});

        if (foundUserEmail) throw new Error("Email has already been taken");
        if (foundUsername) throw new Error("This username has already been taken")

        // Errors if user has not provided sign up details
        if (!data.username) throw new Error("A username is required");
        if (!data.email) throw new Error("An email is required");
        if (!data.password) throw new Error("A password is required");
        if (!data.firstName) throw new Error("First name is required");
        if (!data.lastName) throw new Error("Last name is required");

        const user = new User();
        user.username = data.username;
        user.email = data.email;
        user.password = await bcrypt.hash(data.password, 10);
        user.firstName = data.firstName;
        user.lastName = data.lastName;

        await this.userRepository.save(user);

        return user;
    }

    async findLoggedInUser(username: string): Promise<User> {
        console.log(username)
        const currentLoggedInUser = await this.userRepository.findOne({ where: { username }});
        return currentLoggedInUser;
    }
}
