import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: 100, unique: true})
    title: string;

    @Column('varchar', {length: 500, unique: true})
    body: string;

    @CreateDateColumn({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    dateCreated: Date;

    @Column()
    dueDate: string;

    @Column({ nullable: true })
    dateCompleted: string;

    @Column('varchar', {length: 100})
    status: string;

    @ManyToOne(type => User, user => user.todos)
    user: User;
}