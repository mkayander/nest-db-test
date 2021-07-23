// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const username = process.env.POSTGRES_DB_USER || "postgres";
const password = process.env.POSTGRES_DB_PWD || "example";

const config = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username,
  password,
  database: process.env.POSTGRES_DB_NAME,
  synchronize: true, // Dev mode only
  dropSchema: false,
  logging: true,
  entities: [
    __dirname + "/src/**/*.entity.ts",
    __dirname + "/dist/**/*.entity.js",
  ],
  migrations: ["migrations/**/*.ts"],
  subscribers: ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  cli: {
    entitiesDir: "src",
    migrationsDir: "migrations",
    subscribersDir: "subscriber",
  },
};

module.exports = config;

console.log(config);
