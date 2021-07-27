import { Module, OnModuleInit } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "../users/users.module";
import { CarsModule } from "../cars/cars.module";
import * as ormConfig from "../../../ormconfigMongo";
import { AdminModule } from "@admin-bro/nestjs";
import { HttpAdapterHost } from "@nestjs/core";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      autoLoadEntities: true,
    }),
    UsersModule,
    CarsModule,
    AdminModule.createAdmin({
      adminBroOptions: { rootPath: "/admin", resources: [] },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  onModuleInit() {
    console.log(
      "AppModule http adapter host: ",
      this.httpAdapterHost.httpAdapter.getType(),
    );
  }
}

console.log(ormConfig);
