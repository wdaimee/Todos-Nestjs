import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('varchar', {length: 100, unique: true})
    title: string;

    @Column('varchar', {length: 500, unique: true})
    body: string;

    @CreateDateColumn({type: 'date'})
    dueDate: Date;

    @CreateDateColumn({type: 'date'})
    dateCompleted: Date;

    @Column('varchar', {length: 100})
    status: string;

    @ManyToOne(type => User, user => user.todos)
    user: User;
}