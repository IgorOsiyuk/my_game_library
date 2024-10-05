import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserUserTokensToken1728120740959 implements MigrationInterface {
  name = 'UserUserTokensToken1728120740959';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "created_data" TIMESTAMP NOT NULL DEFAULT now(), "updated_data" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
    await queryRunner.query(
      `CREATE TABLE "user_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_92ce9a299624e4c4ffd99b645b6" UNIQUE ("userId"), CONSTRAINT "PK_63764db9d9aaa4af33e07b2f4bf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "device" character varying NOT NULL, "isOnBlackList" boolean NOT NULL DEFAULT false, "refreshToken" character varying, "created_data" TIMESTAMP NOT NULL DEFAULT now(), "updated_data" TIMESTAMP NOT NULL DEFAULT now(), "userTokenId" uuid, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "token" ADD CONSTRAINT "FK_39ed5cc73d8cc72e62eeda77c12" FOREIGN KEY ("userTokenId") REFERENCES "user_tokens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_39ed5cc73d8cc72e62eeda77c12"`);
    await queryRunner.query(`DROP TABLE "token"`);
    await queryRunner.query(`DROP TABLE "user_tokens"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
