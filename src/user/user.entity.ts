import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('varchar', {length: 500, unique: true})
    username: string;

    @Column('varchar', {length: 500, unique: true})
    email: string;

    @Column('varchar', {length: 50})
    password: string;

    @Column('varchar', {length: 50})
    firstName: string;

    @Column('varchar', {length: 50})
    lastName: string;
}