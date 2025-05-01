import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateIdReviews1746095913990 implements MigrationInterface {
    name = 'UpdateIdReviews1746095913990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ADD "isFavorite" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "isFavorite"`);
    }

}
