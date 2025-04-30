import { MigrationInterface, QueryRunner } from "typeorm";

export class Reviews1746020599423 implements MigrationInterface {
    name = 'Reviews1746020599423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."reviews_status_enum" AS ENUM('В процессе', 'Пройдено', 'Заброшено', 'Запланировано')`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "status" "public"."reviews_status_enum", "playTime" character varying NOT NULL, "rating" double precision NOT NULL, "score" double precision NOT NULL, "plotScore" double precision NOT NULL, "artScore" double precision NOT NULL, "gameplayScore" double precision NOT NULL, "difficulty" character varying NOT NULL, "trophies" integer NOT NULL, "review" text NOT NULL, "created_data" TIMESTAMP NOT NULL DEFAULT now(), "updated_data" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TYPE "public"."reviews_status_enum"`);
    }

}
