import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUrlsTable1783858188188 implements MigrationInterface {
  name = 'CreateUrlsTable1783858188188';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "urls" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "destinationUrl" character varying NOT NULL, "clickCount" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a7b51de2dd9fc9fddb1e2453b98" UNIQUE ("code"), CONSTRAINT "PK_eaf7bec915960b26aa4988d73b0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "urls"`);
  }
}
