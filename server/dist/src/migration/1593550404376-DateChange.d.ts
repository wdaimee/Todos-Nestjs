import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DateChange1593550404376 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
