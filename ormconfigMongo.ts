import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const config: ConnectionOptions = {
  type: "mongodb",
  // host: "localhost",
  // port: 27017,
  // url: "mongodb://localhost:27017/",
  database: "nest",
  entities: ["dist/src/server/**/*.entity{.ts,.js}"],
  migrations: ["dist/src/server/migrations/*{.ts,.js}"],
  synchronize: true,
  logging: false,
  cli: {
    migrationsDir: "src/server/migrations",
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = config;
