import { MigrationInterface, QueryRunner } from "typeorm";

export class TitleReview1746090873024 implements MigrationInterface {
    name = 'TitleReview1746090873024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "img" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "img"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "title"`);
    }

}
