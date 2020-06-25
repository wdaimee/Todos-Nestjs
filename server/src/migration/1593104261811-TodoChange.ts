import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoChange1593104261811 implements MigrationInterface {
    name = 'TodoChange1593104261811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCreated" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCreated"`);
    }

}
