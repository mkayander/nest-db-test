import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum CarEngineType {
  gas,
  diesel,
  electric,
  hybrid,
}

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  manufacturer: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  engineType: CarEngineType;
}
