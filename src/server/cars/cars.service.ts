import { Injectable, OnModuleInit } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { InjectConnection, InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { Car } from "./entities/car.entity";
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class CarsService implements OnModuleInit {
  constructor(
    @InjectRepository(Car) private readonly carsRepository: Repository<Car>,
    @InjectConnection() private readonly connection: Connection,
    private adapterHost: HttpAdapterHost,
  ) {}

  onModuleInit() {
    console.log(this.adapterHost.httpAdapter.getType());
  }

  async create(createCarDto: CreateCarDto) {
    return this.carsRepository.findOne(
      (await this.carsRepository.insert(createCarDto)).identifiers[0].id,
    );
  }

  findAll() {
    return this.carsRepository.find();
  }

  findOne(id: number) {
    return this.carsRepository.findOne(id);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carsRepository.update(id, updateCarDto);
  }

  async remove(id: number) {
    return this.carsRepository.remove(await this.carsRepository.findOne(id));
  }
}
