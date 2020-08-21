import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { TodoModule } from './todos/todo.module';
import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { ServeHTMLMiddleware } from './app.middleware';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TodoModule,
    AuthModule
  ],
})

export class AppModule implements NestModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ServeHTMLMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET })
  }
}
