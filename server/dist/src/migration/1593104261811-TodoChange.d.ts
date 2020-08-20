import { MigrationInterface, QueryRunner } from "typeorm";
export declare class TodoChange1593104261811 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
