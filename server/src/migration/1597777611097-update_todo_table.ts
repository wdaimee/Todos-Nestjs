import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTodoTable1597777611097 implements MigrationInterface {
    name = 'updateTodoTable1597777611097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "UQ_04ad5fc901faccecfdf7224e3a4"`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "dueDate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "dueDate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "UQ_04ad5fc901faccecfdf7224e3a4" UNIQUE ("body")`);
    }

}
