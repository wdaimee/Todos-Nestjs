"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoChange1593104261811 = void 0;
class TodoChange1593104261811 {
    constructor() {
        this.name = 'TodoChange1593104261811';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" ADD "dateCreated" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "dateCreated"`);
    }
}
exports.TodoChange1593104261811 = TodoChange1593104261811;
//# sourceMappingURL=1593104261811-TodoChange.js.map