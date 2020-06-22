import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { InputTodo } from './input/todo.input';

@Resolver(() => Todo)
export class TodoResolver {
    constructor (private readonly todoService: TodoService) {}

    @Query(() => [ CreateTodoDto ])
    async allTodos() {
        return this.todoService.findAll();
    }

    @Query(() => CreateTodoDto)
    async todo(@Args('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => CreateTodoDto)
    async createTodo(@Args('data') data: InputTodo) {
        return this.todoService.createTodo(data);
    }

    @Mutation()
    async deleteTodo(@Args('id') id: string) {
        return this.todoService.remove(id);
    }
}