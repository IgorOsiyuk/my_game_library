import { MigrationInterface, QueryRunner } from "typeorm";

export class ReviewUpdate1750785198646 implements MigrationInterface {
    name = 'ReviewUpdate1750785198646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "score"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "trophies"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "gameScore" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "gameScore"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "trophies" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "score" double precision NOT NULL`);
    }

}
