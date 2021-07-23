// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const config = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PWD,
  database: process.env.MYSQL_DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
};

module.exports = config;
