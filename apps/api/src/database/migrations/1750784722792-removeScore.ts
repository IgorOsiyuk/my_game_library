import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveScore1750784722792 implements MigrationInterface {
    name = 'RemoveScore1750784722792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" character varying`);
    }

}
