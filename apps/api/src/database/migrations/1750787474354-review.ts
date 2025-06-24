import { MigrationInterface, QueryRunner } from "typeorm";

export class Review1750787474354 implements MigrationInterface {
    name = 'Review1750787474354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ADD "genres" character varying`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "platforms" character varying`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "releaseDate" date`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "plot" text`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "playTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "rating" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "rating" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameScore" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameScore" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "plotScore" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "plotScore" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "artScore" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "artScore" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameplayScore" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameplayScore" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "difficulty" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "review" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "review" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "difficulty" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameplayScore" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameplayScore" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "artScore" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "artScore" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "plotScore" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "plotScore" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameScore" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "gameScore" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "rating" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "rating" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "playTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "plot"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "releaseDate"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "platforms"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "genres"`);
    }

}
