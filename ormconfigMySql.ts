import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PWD,
  database: process.env.MYSQL_DB_NAME,
  entities: ["src/server/**/*.entity{.ts,.js}"],
  migrations: ["src/server/migrations/*{.ts,.js}"],
  synchronize: false,
  cli: {
    migrationsDir: "src/server/migrations",
  },
};

module.exports = config;
