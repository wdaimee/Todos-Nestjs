import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
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

    @Column()
    userId: string;

    // Create a column with userId 
    @ManyToOne(type => User, user => user.id)
    @JoinColumn({name: "userId"})
    user: User;
}