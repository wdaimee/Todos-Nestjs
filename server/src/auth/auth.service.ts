import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

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

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }
}
