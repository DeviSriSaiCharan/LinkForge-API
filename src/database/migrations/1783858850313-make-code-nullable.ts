import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeCodeNullable1783858850313 implements MigrationInterface {
    name = 'MakeCodeNullable1783858850313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "code" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" ALTER COLUMN "code" SET NOT NULL`);
    }

}
