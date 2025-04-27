import { MigrationInterface, QueryRunner } from "typeorm";

export class GamePlatform1745733186661 implements MigrationInterface {
    name = 'GamePlatform1745733186661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "platform" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_b9b57ec16b9c2ac927aa62b8b3f" UNIQUE ("name"), CONSTRAINT "PK_c33d6abeebd214bd2850bfd6b8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "game_platform" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "game_id" uuid NOT NULL, "platform_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dd6046a3ad8469784c0ac5d0b8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "game_genre" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "slug" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" integer`);
        await queryRunner.query(`ALTER TABLE "game_platform" ADD CONSTRAINT "FK_6eead7d5b2b0b91f08092f539f5" FOREIGN KEY ("game_id") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "game_platform" ADD CONSTRAINT "FK_0d7a5045aeb339f8403823c38f6" FOREIGN KEY ("platform_id") REFERENCES "platform"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_platform" DROP CONSTRAINT "FK_0d7a5045aeb339f8403823c38f6"`);
        await queryRunner.query(`ALTER TABLE "game_platform" DROP CONSTRAINT "FK_6eead7d5b2b0b91f08092f539f5"`);
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "game" ADD "rating" character varying`);
        await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "slug" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "game_genre" DROP COLUMN "created_at"`);
        await queryRunner.query(`DROP TABLE "game_platform"`);
        await queryRunner.query(`DROP TABLE "platform"`);
    }

}
