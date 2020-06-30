import {MigrationInterface, QueryRunner} from "typeorm";

export class DateChange1593550404376 implements MigrationInterface {
    name = 'DateChange1593550404376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dueDate"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dueDate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCompleted"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCompleted" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCompleted"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCompleted" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dueDate"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dueDate" date NOT NULL DEFAULT now()`);
    }

}
