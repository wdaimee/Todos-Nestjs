import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1592843370189 implements MigrationInterface {
    name = 'myInit1592843370189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(500) NOT NULL, "email" character varying(500) NOT NULL, "password" character varying(50) NOT NULL, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "todo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "body" character varying(500) NOT NULL, "dueDate" date NOT NULL DEFAULT now(), "dateCompleted" date NOT NULL DEFAULT now(), "status" character varying(100) NOT NULL, "userId" uuid, CONSTRAINT "UQ_a127ef45613b1dc046221fc5981" UNIQUE ("title"), CONSTRAINT "UQ_04ad5fc901faccecfdf7224e3a4" UNIQUE ("body"), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_1e982e43f63a98ad9918a86035c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_1e982e43f63a98ad9918a86035c"`);
        await queryRunner.query(`DROP TABLE "todo"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
