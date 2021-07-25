import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true, default: "Unknown" })
  middleName: string;

  @Column({ nullable: true })
  age: number;

  @Column({ default: true })
  isActive: boolean;
}
