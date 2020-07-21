import { UserResolver } from './user.resolver';
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
    providers: [UserResolver, UserService],
    exports: [UserService],
    controllers: [],
})

export class UserModule {}