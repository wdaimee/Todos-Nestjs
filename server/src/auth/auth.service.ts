import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { LoginOutput } from '../user/output/login.output';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (!user) return null;

        const valid = await new Promise(res => {
            bcrypt.compare(pass, user.password, (err, result) => {
                if (err) res(false);
                else res(result);
            });
        });

        if (!valid) return null;

        // eslint-disable-next-line
        const { password: p, ...result } = user;
        return result;
    }

    async login(user: User) {
        return {
            accessToken: this.jwtService.sign({
                user
            })
        }
    }

    verify(token: string) {
        return this.jwtService.verify(token);
    }
}
