import { ConnectionOptions, createConnection } from "typeorm";
import * as config from "./ormconfigMongo";
import { Car, CarEngineType } from "./src/server/cars/entities/car.entity";
import { User } from "./src/server/users/entities/user.entity";

createConnection({
  ...(config as ConnectionOptions),
  entities: [Car, User],
}).then(async (connection) => {
  console.log("Mongo connected: ", connection.isConnected);

  const repository = await connection.mongoManager.getMongoRepository(Car);

  // console.log(connection.entityMetadatas);

  console.log(
    await repository.insert({
      engineType: CarEngineType.gas,
      model: "VAZ",
      manufacturer: "Lada",
    }),
  );

  console.log(await repository.find());
});
