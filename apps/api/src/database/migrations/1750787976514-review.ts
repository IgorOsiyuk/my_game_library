import { MigrationInterface, QueryRunner } from "typeorm";

export class Review1750787976514 implements MigrationInterface {
    name = 'Review1750787976514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "releaseDate"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "releaseDate" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "releaseDate"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "releaseDate" date`);
    }

}
