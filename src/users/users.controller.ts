import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: number) {
    const user = await this.service.get(id);
    console.log(user);
    return user ?? `User with id ${id} does not exist!`;
  }

  @Post()
  insert(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.service.create(createUserDto);
  }
}
