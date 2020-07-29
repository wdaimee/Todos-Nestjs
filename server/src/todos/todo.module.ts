import { TodoResolver } from './todo.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { UserService } from '../user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo]), UserService],
    providers: [TodoResolver, TodoService],
    controllers: [],
})

export class TodoModule {}