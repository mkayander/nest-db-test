import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersAddAge1627238544921 implements MigrationInterface {
  name = "UsersAddAge1627238544921";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` ADD `age` int NULL");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age`");
  }
}
