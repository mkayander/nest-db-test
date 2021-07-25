import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCarTable1627238107939 implements MigrationInterface {
  name = "CreateCarTable1627238107939";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `car` (`id` int NOT NULL AUTO_INCREMENT, `manufacturer` varchar(255) NOT NULL, `model` varchar(255) NOT NULL, `year` int NOT NULL, `engineType` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `car`");
  }
}
