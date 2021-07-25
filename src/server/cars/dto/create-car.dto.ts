import { CarEngineType } from "../entities/car.entity";

export class CreateCarDto {
  manufacturer: string;

  model: string;

  year: number;

  engineType: CarEngineType;
}
