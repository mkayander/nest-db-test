import { PartialType } from "@nestjs/mapped-types";
import { CreateCarDto } from "./create-car.dto";
import { CarEngineType } from "../entities/car.entity";

export class UpdateCarDto extends PartialType(CreateCarDto) {
  manufacturer?: string;

  model?: string;

  year?: number;

  engineType?: CarEngineType;
}
