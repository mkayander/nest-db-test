import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

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
