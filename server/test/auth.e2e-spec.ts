import { Connection } from "typeorm";

import { createTestConn } from './createTestConn';

let conn: Connection;

beforeAll(async() => {
    conn = await createTestConn();
});

afterAll(async() => {
    await conn.close();
});

const loginMutation = `
    mutation Login($username: String!, $password: String!) {
        login(data: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

const verifyQuery = `
    query verify($token: String) {
        verifyToken(accessToken: $token) {
        }
    }
`;

describe('Auth', () => {
    it('Login a User', () => {
        const testUser = { username: "test1", 
                           password: "password", 
                           email: "test@email.com",
                           firstName: "test1",
                           lastName: "test2"
                        };
       
        const loginResponse = await grahqlTestCall(loginMutation, {
            username: testUser.username,
            password: testUser.password
        });
    })
})