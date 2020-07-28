import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../src/user/user.module';
import { UserService } from '../src/user/user.service';
import { User } from '../src/user/user.entity';
import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../src/config/config.service';

const app = 'http://localhost:3001'

describe('User', () => {

    // Test for A List of All Users, need to get the data part working
    it('Get all users', () => {
        return supertest(app)
            .post('/graphql')
            .send({
                operationName: null,
                query: "{allUsers { id, username, firstName, lastName }}"
            })
            .expect(200)
            // .expect({data: {allUsers: []}});
    })

    // Change this to generic user and not just one already in the system
    it('Find User', () => {
        return supertest(app)
            .post('/graphql')
            .send({
                operationName: null,
                query: '{user(username: "waqas") {id, email, firstName, lastName}}'
            })
            .expect(200)
            .expect({data: {user: {id: "38fd4448-a456-4f70-9a8a-22900ee5a8ce", 
                                   email: "wdaimee@gmail.com",
                                   firstName: "waqas",
                                   lastName: "daimee"
                    }}})
    })

    // Create a user

    // Find a logged in user
})