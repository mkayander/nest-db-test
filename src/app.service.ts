import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";

@Injectable()
export class AppService {
  constructor(private readonly connection: Connection) {
  }

  getHello(): string {
    console.log(this.connection.isConnected);
    console.log(this.connection.name);
    console.log(this.connection.entityMetadatas);

    return "Hello World!";
  }
}
