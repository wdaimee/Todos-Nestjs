import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { User } from '../user/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { InputTodo, DateCompletedTodo } from './input/todo.input';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../user/CurrentUser.decorator';

@Resolver(() => Todo)
export class TodoResolver {
    constructor (private readonly todoService: TodoService) {}

    // Find all todo's for a user by date
    @Query(() => [ CreateTodoDto ])
    @UseGuards(JwtAuthGuard)
    async allTodos(@CurrentUser() user: User) {
        return this.todoService.findAllTodos(user);
    }

    // Find all open Todos for a user
    @Query(() => [ CreateTodoDto ])
    @UseGuards(JwtAuthGuard)
    async allOpenTodos(@CurrentUser() user: User) {
        return this.todoService.allOpenTodos(user);
    }

    // Find a single Todo for a user
    @Query(() => CreateTodoDto)
    @UseGuards(JwtAuthGuard)
    async todo(
        @Args('id') id: string,
        @CurrentUser() user: User
    ) {
        return this.todoService.findOneTodo(id, user.id);
    }

    // Create a todo for a user
    @Mutation(() => CreateTodoDto)
    @UseGuards(JwtAuthGuard)
    async createTodo(
        @Args('data') data: InputTodo,
        @CurrentUser() user: User
    ) {
        return this.todoService.createTodo(data, user);
    }

    // Add function for completing Todo
    @Mutation(() => CreateTodoDto) 
    @UseGuards(JwtAuthGuard)
    async todoCompleted(
        @Args('id') id: string,
        @CurrentUser() user: User
    ) {
        return this.todoService.todoCompleted(id, user.id)
    }
    
    // Works but need to respond back with deleted Todo or success message
    @Mutation(returns => CreateTodoDto)
    @UseGuards(JwtAuthGuard)
    async deleteTodo(
        @Args('id') id: string,
        @CurrentUser() user: User
    ) {
        await this.todoService.removeTodo(id, user.id);
    }

    // Add update Todo, need to verify with logged in user
    @Mutation(() => CreateTodoDto)
    @UseGuards(JwtAuthGuard)
    async updateTodo(
        @Args('id') id: string,
        @Args('data') data: InputTodo,
        @CurrentUser() user: User
    ) {
        return this.todoService.updateTodo(id, data, user.id);
    }
}