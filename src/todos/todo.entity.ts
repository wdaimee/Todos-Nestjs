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
    due_date: Date;

    @CreateDateColumn({type: 'date'})
    date_completed: Date;

    @Column('varchar', {length: 100})
    status: string;

    //UserId FK

    @ManyToOne(type => User, user => user.todos)
    user: User;
}