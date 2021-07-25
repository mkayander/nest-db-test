import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  get(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(user: CreateUserDto) {
    return this.usersRepository.insert(user).then((value) => {
      return this.get(value.identifiers[0].id);
    });
  }

  async remove(id: string): Promise<boolean> {
    await this.usersRepository.delete(id);
    return true;
  }
}
