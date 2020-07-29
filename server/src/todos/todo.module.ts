import { TodoResolver } from './todo.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoResolver, TodoService],
    controllers: [],
})

export class TodoModule {}