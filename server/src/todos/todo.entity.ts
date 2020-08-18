import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: 100, unique: true})
    title: string;

    @Column('varchar', {length: 500})
    body: string;

    @CreateDateColumn({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    dateCreated: Date;

    @Column({ nullable: true })
    dueDate: string;

    @Column({ nullable: true })
    dateCompleted: string;

    @Column('varchar', {length: 100, nullable: true})
    status: string;

    @ManyToOne(type => User, user => user.todos)
    user: User;
}