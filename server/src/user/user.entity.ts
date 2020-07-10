import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from '../todos/todo.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: 500, unique: true})
    username: string;

    @Column('varchar', {length: 500, unique: true})
    email: string;

    @Column('varchar', {length: 500})
    password: string;

    @Column('varchar', {length: 50})
    firstName: string;

    @Column('varchar', {length: 50})
    lastName: string;

    @OneToMany(type => Todo, todo => todo.user)
    todos: Todo[];
}