import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1745733577878 implements MigrationInterface {
    name = 'Migrations1745733577878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" integer`);
    }

}
