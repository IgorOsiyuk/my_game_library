import { MigrationInterface, QueryRunner } from "typeorm";

export class ReleaseDate1745734753975 implements MigrationInterface {
    name = 'ReleaseDate1745734753975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" ADD "releaseDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "releaseDate"`);
    }

}
