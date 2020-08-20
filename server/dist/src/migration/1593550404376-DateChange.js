"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateChange1593550404376 = void 0;
class DateChange1593550404376 {
    constructor() {
        this.name = 'DateChange1593550404376';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dueDate"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dueDate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCompleted"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCompleted" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCompleted"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCompleted" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dueDate"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "dueDate" date NOT NULL DEFAULT now()`);
    }
}
exports.DateChange1593550404376 = DateChange1593550404376;
//# sourceMappingURL=1593550404376-DateChange.js.map