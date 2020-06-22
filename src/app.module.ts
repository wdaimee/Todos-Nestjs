import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { TodoModule } from './todos/todo.module';
import { configService } from './config/config.service';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TodoModule
  ],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
