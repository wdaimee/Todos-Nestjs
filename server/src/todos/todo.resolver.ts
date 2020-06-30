import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { InputTodo, DateCompletedTodo } from './input/todo.input';

@Resolver(() => Todo)
export class TodoResolver {
    constructor (private readonly todoService: TodoService) {}

    @Query(() => [ CreateTodoDto ])
    async allTodos() {
        return this.todoService.findAll();
    }

    //Find all open Todos for a user
    @Query(() => [ CreateTodoDto ])
    async allOpenTodos() {
        return this.todoService.allOpen();
    }

    @Query(() => CreateTodoDto)
    async todo(@Args('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => CreateTodoDto)
    async createTodo(@Args('data') data: InputTodo) {
        return this.todoService.createTodo(data);
    }

    @Mutation(() => CreateTodoDto) 
    async dateCompleted(
        @Args('id') id: string,
        @Args('data') data: DateCompletedTodo
    ) {
        return this.todoService.addDateCompleted(id, data)
    }
    
    @Mutation(returns => CreateTodoDto)
    async deleteTodo(@Args('id') id: string) {
        await this.todoService.remove(id);
    }
}