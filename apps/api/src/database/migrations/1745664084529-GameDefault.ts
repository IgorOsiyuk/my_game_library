import { MigrationInterface, QueryRunner } from "typeorm";

export class GameDefault1745664084529 implements MigrationInterface {
    name = 'GameDefault1745664084529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "game" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "rating" character varying, "image" character varying, "slug" character varying, CONSTRAINT "UQ_b9af94cf126ec9f9b2e3523736a" UNIQUE ("slug"), CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "game_genre" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "game_id" uuid NOT NULL, "genre_id" uuid NOT NULL, CONSTRAINT "PK_f9cca8f92d23a02752da15872d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genre" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_dd8cd9e50dd049656e4be1f7e8c" UNIQUE ("name"), CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "game_genre" ADD CONSTRAINT "FK_5390c8f9507cfca301cbd330138" FOREIGN KEY ("game_id") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "game_genre" ADD CONSTRAINT "FK_e2614c7455fe03de781aa59ed68" FOREIGN KEY ("genre_id") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_genre" DROP CONSTRAINT "FK_e2614c7455fe03de781aa59ed68"`);
        await queryRunner.query(`ALTER TABLE "game_genre" DROP CONSTRAINT "FK_5390c8f9507cfca301cbd330138"`);
        await queryRunner.query(`DROP TABLE "genre"`);
        await queryRunner.query(`DROP TABLE "game_genre"`);
        await queryRunner.query(`DROP TABLE "game"`);
    }

}
