import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1627237451105 implements MigrationInterface {
    name = 'CreateUsersTable1627237451105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `middleName` varchar(255) NULL DEFAULT 'Unknown', `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
