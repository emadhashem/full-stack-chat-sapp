import { User } from "src/entities/User.entity";
import { CreateUserBody } from "src/utils/types";

export interface IUserService {
    createUser(createUserbody: CreateUserBody)
    findUser(email: string) : Promise<User>
}