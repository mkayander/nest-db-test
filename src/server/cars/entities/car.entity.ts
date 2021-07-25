import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum CarEngineType {
  gas,
  diesel,
  electric,
  hybrid,
}

@Entity()
export class Car {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  manufacturer: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  engineType: CarEngineType;
}
