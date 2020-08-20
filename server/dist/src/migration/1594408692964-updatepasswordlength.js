"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatepasswordlength1594408692964 = void 0;
class updatepasswordlength1594408692964 {
    constructor() {
        this.name = 'updatepasswordlength1594408692964';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(500) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(50) NOT NULL`);
    }
}
exports.updatepasswordlength1594408692964 = updatepasswordlength1594408692964;
//# sourceMappingURL=1594408692964-updatepasswordlength.js.map