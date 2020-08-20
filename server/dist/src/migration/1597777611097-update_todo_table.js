"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoTable1597777611097 = void 0;
class updateTodoTable1597777611097 {
    constructor() {
        this.name = 'updateTodoTable1597777611097';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "UQ_04ad5fc901faccecfdf7224e3a4"`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "dueDate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "dueDate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "UQ_04ad5fc901faccecfdf7224e3a4" UNIQUE ("body")`);
    }
}
exports.updateTodoTable1597777611097 = updateTodoTable1597777611097;
//# sourceMappingURL=1597777611097-update_todo_table.js.map